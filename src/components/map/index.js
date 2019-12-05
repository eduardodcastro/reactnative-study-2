import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapLocationActions } from '~/store/ducks/mapLocation';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Text,
  Platform,
} from 'react-native';

import { Marker } from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';
import SearchBox from '~/components/searchBox';
import ClusterMarker from './mapComponents/ClusterMarker';
import EstateDetailsCardList from '~/components/estateDetailsCardList';
import PriceMarker from './mapComponents/PriceMarker';
import ComponentUtils from '~/utils';
import { elevationTypes, getElevation } from '~/styles/elevations';
import Loading from '~/components/loading';
// import MapSearchScreen from '~/mapComponents/MapSearchScreen';
import _ from 'lodash';
import { colors, general, metrics, text, images } from '~/styles';
import styles from './styles';
import { LIMITE_CLIQUE_CLUSTER } from '~/utils/constants';

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      region: null,
      showList: false,
      fadeAnim: new Animated.Value(0),
      mapReady: false,
    };

    this.getFilterButtonColor = this.getFilterButtonColor.bind(this);
    this.animate = this.animate.bind(this);
    this.renderMarker = this.renderMarker.bind(this);
    this.renderCluster = this.renderCluster.bind(this);
    this.animateToRegion = this.animateToRegion.bind(this);
  }

  renderMarker(data) {
    const { mapLocation, onMarkerSelected } = this.props;
    const {
      viewedEstates,
      selectedMarkerData,
    } = mapLocation;

    const onMarkerPress = () => {
      onMarkerSelected(data, false);
    };

    let markerColor;
    if (
      _.some(selectedMarkerData, marker => marker.key === data.key)
    ) {
      markerColor = colors.orange;
    } else if (viewedEstates[data.key]) {
      markerColor = colors.mediumGrey;
    } else {
      markerColor = colors.red;
    }

    // se só mudamos a cor do marcador, sem mudar a chave, a nova cor não é
    // mostrada... :/
    // https://github.com/react-community/react-native-maps/issues/65
    const key = `${data.key}_${markerColor}`;

    return (
      <Marker
        key={key}
        coordinate={data.location}
        onPress={onMarkerPress}
        tracksViewChanges={!this.state.mapReady}
      >
        <PriceMarker
          text={`${ComponentUtils.formatAsCurrencyWithoutCents(
            data.valorLocacao,
          )}`}
          color={markerColor}
        />
      </Marker>
    );
  }

  renderCluster(cluster, onPress) {
    const { pointCount, coordinate } = cluster;
    const { latitude, longitude } = coordinate;

    const { mapLocation, onMarkerSelected } = this.props;
    const {
      selectedMarkerData,
    } = mapLocation;

    const data = this.map
      .getClusteringEngine()
      .getLeaves(cluster.clusterId, Infinity);

    let markers = [];
    data.forEach(leaf => {
      markers.push(leaf.properties.item);
    });

    const onClusterPress = () => {
      if (markers.length <= LIMITE_CLIQUE_CLUSTER) {
        onMarkerSelected(markers, true);
      } else {
        // Isola somente um array de marcadores com as coordenadas lat e long para uso na aproximação do cluster
        const newMarkers = _.map(markers, function (item) {
          return { latitude: item.location.latitude, longitude: item.location.longitude }
        });
        this.map.getMapRef().fitToCoordinates(newMarkers);
      }
    };

    let markerColor;
    if (
      selectedMarkerData.length > 0 &&
      _.differenceBy(selectedMarkerData, markers, 'key').length === 0
    ) {
      markerColor = colors.orange;
    } else {
      markerColor = colors.red;
    }

    // se só mudamos a cor do marcador, sem mudar a chave, a nova cor não é
    // mostrada... :/
    // https://github.com/react-community/react-native-maps/issues/65
    const key = `cluster_${markerColor}`;

    return (
      <Marker
        key={key}
        coordinate={{ latitude, longitude }}
        onPress={onClusterPress}
        tracksViewChanges={!this.state.mapReady}
      >
        <ClusterMarker text={`${pointCount}`} color={markerColor} />
      </Marker>
    );
  }

  animateToRegion() {
    this.map.getMapRef().animateToRegion(this.props.region, 1);
  }

  onMapReady() {
    const { onMapReady } = this.props;

    this.setState({
      mapReady: true,
    });

    onMapReady(this.animateToRegion);
  }

  getFilterButtonColor() {
    const { isFilterActive } = this.props
    return isFilterActive ? [styles.filterIcon, { color: Colors.orange }] : styles.filterIcon
  }

  onSeachInputFocus() {
    const { hideEstateCardList } = this.props
    hideEstateCardList()
    this.animate()
    this.setState({ showList: true })
  }

  animate() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 300
      }
    ).start()
  }

  render() {
    const {
      mapLocation, // Requisição da API (redux) dos imóveis para uso no mapa

      // Propriedades originadas da tela que invocou este compnente
      isFilterActive,
      onRegionChange,
      onMapPress,
      initialRegion,
      onEstateViewed,
      deselectMarker,

      // autocompleteQuery, onEstateListPress, ,
      // onQueryChange, , onMyLocationPress,
      // onEstateFilterPress, onClearFilterPress,
    } = this.props;

    const {
      viewedEstates,
      selectedMarkerData,
      isEstateCardListHideAnimating,
      goToEstateDetails,
      markers,
      loading,
    } = mapLocation;

    const onViewableItemsChanged = (changed) => {
      if (changed.viewableItems && changed.viewableItems.length > 0) {
        onEstateViewed(changed.viewableItems[0].item)
      }
    }

    const dismissScreenElements = () => {
      Keyboard.dismiss();
      this.props.hideEstateCardList()
    }

    return (
      <TouchableWithoutFeedback
        onPress={dismissScreenElements}
        disabled={selectedMarkerData.length > 0}
      >
        <View style={styles.container}>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                style={styles.smallCircle} onPress={() => onMyLocationPress(this.animateToRegion)}
              >
                <Image source={images.suaLocalizacao} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mediumCircle} onPress={() => onEstateFilterPress(this.animateToRegion)}
              >
                <Text style={this.getFilterButtonColor()}>Filtrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onEstateListPress(this.animateToRegion)}
                style={styles.smallCircle}
              >
                <Image source={images.lista} />
              </TouchableOpacity>
            </View>
          </View>
          {isFilterActive ? <TouchableOpacity
            style={styles.clearFilterButton} onPress={onClearFilterPress}
          >
            <Image style={styles.clearFilterIcon} source={Images.fechar2} />
          </TouchableOpacity> : null}
          {selectedMarkerData.length > 0 ? <EstateDetailsCardList
            data={selectedMarkerData}
            onViewableItemsChanged={onViewableItemsChanged}
            deselectMarker={deselectMarker}
            isEstateCardListHideAnimating={isEstateCardListHideAnimating}
            goToEstateDetails={goToEstateDetails}
          /> : null}
          <View style={styles.searchBox}>
            <SearchBox
              onQueryChange={(text) => {
                onQueryChange(text)
              }}
              onIconPress={this.onSeachInputFocus.bind(this)}
              value={mapLocation.autocompleteQuery}
              onInputFocus={this.onSeachInputFocus.bind(this)}
            />
          </View>
          <ClusteredMapView
            ref={map => {
              this.map = map;
            }}
            tracksViewChanges={!this.state.mapReady}
            style={styles.map}
            data={markers}
            onRegionChangeComplete={onRegionChange}
            onLayout={this.onMapReady.bind(this)}
            moveOnMarkerPress={false}
            onPress={onMapPress}
            textStyle={{}}
            containerStyle={{}}
            renderMarker={this.renderMarker}
            renderCluster={this.renderCluster}
            initialRegion={initialRegion}
            // TODO: Setando o minZoomLeval para 8, o mapa perdeu a referência do pondo inicial, resolver isto ao obter a posição do usuário
            // --- Sobre o zoom: o Zero não é a altura mais próxima do solo, 0 seria o ponto mais alto
            minZoomLevel={Platform.OS === "ios" ? 8 : 12} // Altura do Zoom Out (Quanto maior o número, mais próximo do solo)
            maxZoomLevel={19} // Altura do Zoom IN (Quanto maior o número, mais próximo do solo)
            // ---
            pitchEnabled={false}
            rotateEnabled={false}
            radius={60}
          />
          <Animated.View style={[styles.animatedContainer, { opacity: this.state.fadeAnim }]}>
            {
              this.state.showList
                ? <MapSearchScreen
                  actionCallback={() => {
                    this.setState({ showList: false, fadeAnim: new Animated.Value(0) })
                  }}
                  animateToRegionCallback={this.animateToRegion}
                />
                : <View />
            }
          </Animated.View>
          {
            loading
              ? <Loading show={loading} />
              : null
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Map.propTypes = {
  autocompleteQuery: PropTypes.string,
  onQueryChange: PropTypes.func,
  onMapReady: PropTypes.func,
  onRegionChange: PropTypes.func,
  onEstateViewed: PropTypes.func,
  initialRegion: PropTypes.object.isRequired,
  region: PropTypes.object,
  markers: PropTypes.array.isRequired,
  viewedEstates: PropTypes.object
}

const mapStateToProps = state => ({
  mapLocation:
    state.mapLocation,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MapLocationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);

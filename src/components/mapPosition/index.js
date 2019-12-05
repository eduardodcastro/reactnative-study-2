import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import MapView from 'react-native-maps';
import Circle from '~/components/circle';
import Triangle from '~/components/triangle';

import { colors, text, images, metrics, general } from '~/styles';
import styles from './styles';

export default class MapPosition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapReady: false,
    };
  }

  render() {
    const { region, style, center } = this.props;
    console.tron.log('REGION', region);
    return (
      <View style={[styles.mainContainer, style]}>
        <MapView
          onMapReady={() => this.setState({ mapReady: true })}
          style={styles.map}
          initialRegion={region}
          region={center || region}
          scrollEnabled={false}
          zoomEnabled={false}
        >
          <MapView.Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            tracksViewChanges={!this.state.mapReady}
          >
            <View style={styles.pinContainer}>
              <View
                style={{
                  width: 50,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <Circle color={colors.orange} diameter={20} />
                <Triangle
                  color={colors.orange}
                  style={styles.imageContainer}
                  base={8}
                  height={13}
                />
                <Circle
                  style={{ position: 'absolute', top: 15 }}
                  color={colors.white}
                  diameter={10}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{''}</Text>
              </View>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

MapPosition.propTypes = {
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }).isRequired,
};

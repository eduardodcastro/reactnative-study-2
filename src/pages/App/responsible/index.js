import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LogarUsuarioActions } from '~/store/ducks/logarUsuario';
import _ from 'lodash';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  AsyncStorage,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MapPosition from '~/components/mapPosition';

import Loading from '~/components/loading';
import { general, colors, images } from '~/styles';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;

class Responsible extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Responsável',
      headerStyle: {
        backgroundColor: colors.sucess,
        borderBottomWidth: 0,
      },
      headerLeft: (
        <TouchableOpacity
          style={general.btnBack}
          onPress={() => navigation.goBack(null)}
        >
          <Icon name="ios-arrow-back" size={25} color={colors.dark} />
        </TouchableOpacity>
      ),
      headerTintColor: colors.dark,
      headerTruncatedBackTitle: null,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerMode: 'none',
    };
  };

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    const { params } = navigation.state;
    const { item } = params;

    let tmpResUser;

    try {
      tmpResUser = item;
    } catch (error) {
      tmpResUser = null;
    }

    this.state = {
      resUser: tmpResUser,
    };
  }

  toRegion = position => {
    return {
      ...position,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
  };

  render() {
    const { resUser } = this.state;
    console.tron.log('ITEM', resUser);

    const address = [
      resUser.address.street,
      resUser.address.suite,
      resUser.address.city,
      resUser.address.zipcode,
    ]
      .filter(p => p)
      .join(' - ');

    const location = {
      latitude: parseFloat(resUser.address.geo.lat),
      longitude: parseFloat(resUser.address.geo.lng),
      // latitude: -19.9401644,
      // longitude: -43.9428946,
    };

    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerList}>
          <View style={styles.boxLeft} />
          <View style={styles.boxRight}>
            <View style={styles.infoData}>
              <Text>{resUser.name}</Text>
              <Text>Email: {resUser.email}</Text>
              <Text>Telefone: {resUser.phone}</Text>
              <Text>Endereço: {address}</Text>
            </View>
          </View>
        </View>
        <MapPosition region={this.toRegion(location)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  logarUsuario: state.logarUsuario,
});

const allCreators = {
  ...LogarUsuarioActions,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(allCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Responsible);

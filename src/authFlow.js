/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';

class AuthFlow extends Component {
  constructor(props) {
    super(props);
    this.bootAsync();
  }

  bootAsync = async () => {
    const { navigation } = this.props;

    const userToken = await AsyncStorage.getItem('@San:usuario');

    navigation.navigate(userToken ? 'App' : 'Logar');
  };

  render() {
    return <View />;
  }
}

export default AuthFlow;

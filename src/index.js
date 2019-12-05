import React, { Component } from 'react';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from '~/store';
import OneSignal from 'react-native-onesignal';
import Routes from '~/routes';

export default class App extends Component {

  componentDidMount() {
    OneSignal.init("8823a57d-7398-406e-8e98-dda7e114c4f4");
    // OneSignal.addEventListener('ids', this.onIds);
  }

  // onIds = (device) => {
  //    console.tron.log('PlayIds', device.userId);
  // };

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

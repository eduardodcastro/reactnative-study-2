import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, text, images, metrics, general } from '~/styles';
import styles from './styles';

export default class TaskItems extends Component {
  constructor() {
    super();
  }

  getUser = () => {
    const { onPress } = this.props;
    onPress();
    // console.tron.log('CLICOU', dataResponsible);
  };

  render() {
    const { idTask, title, description, photo, city, onPress } = this.props;

    let result;

    return (
      <View>
        <View style={styles.containerList}>
          <View style={styles.boxLeft} />
          <View style={styles.boxRight}>
            <View style={styles.checkmark}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                color={colors.green}
                size={Platform.OS === 'ios' ? 20 : 20}
                style={styles.iconCheckmark}
              />
            </View>

            <View style={styles.infoData}>
              <Text>{title}</Text>
              <Text>{description}</Text>
              <Text>{photo}</Text>
              <Text>cidade: {city}</Text>
              {/* <TouchableOpacity
                style={styles.buttonLogIn}
                activeOpacity={0.8}
                onPress={() => this.getUser()}
              >
                <Text>Empresa Show</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

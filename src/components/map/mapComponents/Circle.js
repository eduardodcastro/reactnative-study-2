import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default class Triangle extends Component {
  render() {
    const { style, color, diameter } = this.props;

    return (
      <View
        style={[
          styles.circle,
          {
            backgroundColor: color || colors.red,
            width: diameter || 100,
            height: diameter || 100,
            borderRadius: (diameter || 100) / 2,
          },
          style,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: colors.red,
  },
});

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, text, images, metrics, general } from '~/styles';

export default class Triangle extends Component {
  render() {
    const { style, color, base, height } = this.props;

    return (
      <View
        style={[
          styles.triangle,
          style,
          {
            borderBottomColor: color || colors.red,
            borderLeftWidth: base || 75,
            borderRightWidth: base || 75,
            borderBottomWidth: height || 100,
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 75,
    borderRightWidth: 75,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.red,
  },
});

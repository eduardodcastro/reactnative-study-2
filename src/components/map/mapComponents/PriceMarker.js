import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import Triangle from './Triangle';

export default class PriceMarker extends PureComponent {
  render() {
    const { text, color } = this.props;

    return (
      <View style={styles.mainContainer}>
        <Triangle
          style={styles.imageContainer}
          base={13.75}
          height={20}
          color={color}
        />
        <View style={[styles.textContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    );
  }
}

PriceMarker.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    transform: [{ rotate: '180deg' }],
  },
  image: {},
  textContainer: {
    flexDirection: 'row',
    height: 30,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    fontFamily: 'Muli',
  },
});

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import Circle from './Circle';
import Triangle from './Triangle';

export default class ClusterMarker extends PureComponent {
  render() {
    const { text, color } = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={{ width: 33, height: 42, alignItems: 'center' }}>
          <Circle diameter={29.65} color={color} />
          <Triangle
            style={styles.imageContainer}
            base={13.75}
            height={20}
            color={color}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    );
  }
}

ClusterMarker.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: -8.75,
    justifyContent: 'center',
    transform: [{ rotate: '180deg' }],
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    right: 1,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: 'Muli',
  },
});

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '~/styles';

const Loading = props => {
  const { show, color, size } = props;
  return (
    show
    ? <View style={styles.loading}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || colors.orange}
      />
    </View>
    : <View />
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    flex: 1,
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;

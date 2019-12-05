import { StyleSheet, Platform, Dimensions } from 'react-native';

import { elevationTypes, getElevation } from '~/styles/elevations';
import { colors, metrics, general, text } from '~/styles';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.offWhite,
    backgroundColor: colors.white,
  },
  separator: {
    marginVertical: 5,
  },
});

export default styles;

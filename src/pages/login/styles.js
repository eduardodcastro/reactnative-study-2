import { StyleSheet, Dimensions } from 'react-native';

import {
  colors,
  text,
  metrics,
  general,
  elevations,
} from '~/styles';

import { elevationTypes, getElevation } from '~/styles/elevations';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.offWhite,
    backgroundColor: colors.white,
  },
  containerContent: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.lightGreyOpacity80,
    backgroundColor: colors.white,
  },
  containerFooter: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  mainTitle: {
    ...text.header2,
    color: colors.mediumGrey,
    fontWeight: 'bold',
  },

  inputText: {
    width: DEVICE_WIDTH - 40,
  },

  textInput: {
    ...text.minimalText,
    paddingHorizontal: 5,
  },

  buttonLogIn: {
    marginTop: 40,
  },

  buttonGradient: {
    width: DEVICE_WIDTH - 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.white,
  },
});

export default styles;

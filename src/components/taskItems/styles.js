import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, text, general } from '~/styles';

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
  containerList: {
    // marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxLeft: {
    width: 5,
    height: 20,
    backgroundColor: colors.orange,
  },
  boxRight: {
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: colors.white,
    shadowColor: colors.blackOpacity80,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    overflow: 'hidden',
    width: DEVICE_WIDTH - 40,
    borderRadius: 2,
    minHeight: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  checkmark: {
    elevation: 2,
    backgroundColor: colors.white,
    shadowColor: colors.blackOpacity80,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    overflow: 'hidden',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCheckmark: {
    color: colors.green,
  },
  infoData: {
    paddingHorizontal: 10,
  },
  fotoEnterprises: {
    width: 100,
    height: 100,
  },
});

export default styles;

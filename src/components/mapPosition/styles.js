import { StyleSheet, Dimensions } from 'react-native';
import { text, colors, metrics, general } from '~/styles';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    height: 220,
  },
  map: {
    width: DEVICE_WIDTH,
    height: 200,
  },
  pinContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: -4,
    justifyContent: 'center',
    transform: [{ rotate: '180deg' }],
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    right: 1,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    // fontFamily: 'Muli'
  },
});

export default styles;

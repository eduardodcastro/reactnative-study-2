import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin5: 5,
  baseMargin10: 10,
  baseMargin20: 20,
  baseRadius: 5,
  baseCircle: 50,
  mediumWidht: '50%',
  miniWidht: '25%',
  screenWidth: width < height ? width : height,
  screenHeight: height < width ? height : width,
  popUpWidth: width < height ? width - 40 : height - 40,
  sizeWidthScreen: width,
  sizeHeightScreen: height,
};

import { StyleSheet, Platform } from 'react-native';

import { colors } from '~/styles';
import { elevationTypes, getElevation } from '~/styles/elevations';

const basicCircleProperties = {
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
};

const styles = StyleSheet.create({
  estateCardListContainer: {
    ...getElevation(elevationTypes.SMALL_ELEVATION),
    elevation: elevationTypes.SMALL_ELEVATION + 1,
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  smallCircle: {
    ...getElevation(elevationTypes.SMALL_ELEVATION),
    ...basicCircleProperties,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mediumCircle: {
    ...getElevation(elevationTypes.SMALL_ELEVATION),
    ...basicCircleProperties,
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  clearFilterButton: {
    position: 'absolute',
    bottom: 20,
    ...getElevation(elevationTypes.SMALL_ELEVATION),
    ...basicCircleProperties,
    backgroundColor: colors.orange,
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  clearFilterIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  filterIcon: {
    color: colors.black,
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flex: 1,
    flexDirection: 'column',
  },
  bottomButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    position: 'absolute',
    top: 25,
    left: 20,
    right: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    elevation: elevationTypes.BIG_ELEVATION,
    backgroundColor: colors.lightGrey,
  },
});

export default styles;

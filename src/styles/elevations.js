import { Platform } from 'react-native';

export const elevationTypes = {
  SMALL_ELEVATION: 8,
  MEDIUM_ELEVATION: 16,
  BIG_ELEVATION: 24,
};

export const getElevation = elevationType => {
  return {
    ...Platform.select({
      ios: {
        shadowOpacity: 0.0015 * elevationType + 0.18,
        shadowRadius: 0.54 * elevationType,
        shadowOffset: {
          height: 0.6 * elevationType,
        },
      },
      android: {
        elevation: elevationType,
      },
    }),
  };
};

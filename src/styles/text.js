import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import colors from './colors';

export const elevationTypes = {
  SMALL_ELEVATION: 8,
  MEDIUM_ELEVATION: 16,
  BIG_ELEVATION: 24,
};

export const headerStyle = StyleSheet.create({
  loginButtonContainer: {
    marginRight: 16,
  },
  loginImage: {
    width: 24,
    height: 24,
  },
});

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

export const webViewHeaderStyle = {
  gesturesEnabled: false,
  tabBarVisible: false,
  headerRight: <View />,
  headerTintColor: colors.black,
  headerBackTitle: null,
  headerTruncatedBackTitle: null,
  headerTitleStyle: {
    fontFamily: 'Muli',
    fontSize: 18,
    color: colors.strongGrey,
    flex: 1,
    textAlign: 'center',
  },
};

const styles = StyleSheet.create({
  header1: {
    fontFamily: 'Muli',
    fontSize: 30,
  },
  header2: {
    fontFamily: 'Muli',
    fontSize: 21,
  },
  header4: {
    fontFamily: 'Muli',
    fontSize: 18,
  },
  header5: {
    fontFamily: 'Muli',
    fontSize: 16,
  },
  mediumText: {
    fontFamily: 'Muli',
    fontSize: 13,
  },
  smallText: {
    fontFamily: 'Muli',
    fontSize: 12,
  },
  minimalText: {
    fontFamily: 'Muli',
    fontSize: 11,
  },
  text: {
    fontFamily: 'Muli',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  backContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
  },
});

export default styles;

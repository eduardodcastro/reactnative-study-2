import { Platform } from 'react-native';

import color from './colors';

const FONT_FAMILY = 'Nunito';
const LABEL_COLOR = color.dark;
const INPUT_COLOR = color.gray;
const ERROR_COLOR = color.redSecondary;
const HELP_COLOR = color.orangeSecondary;
const BORDER_COLOR = color.light;
const DISABLED_COLOR = color.purple;
const DISABLED_BACKGROUND_COLOR = color.green;
const FONT_SIZE = 16;
const FONT_WEIGHT = '400';

const stylesheet = Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10,
    },
    error: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 4,
      fontWeight: '400',
      fontFamily: FONT_FAMILY,
      marginTop: 10,
    },
    // the style applied when a validation error occours
    error: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 4,
      fontWeight: '500',
      fontFamily: FONT_FAMILY,
      marginTop: 10,
    },
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: 13,
      marginBottom: 2,
      marginTop: 0,
      fontFamily: FONT_FAMILY,
      fontStyle: 'italic',
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: 13,
      marginBottom: 2,
      marginTop: 0,
      fontFamily: FONT_FAMILY,
      fontStyle: 'italic',
    },
  },
  errorBlock: {
    fontSize: FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR,
    fontFamily: FONT_FAMILY,
  },
  textboxView: {
    normal: {},
    error: {},
    notEditable: {},
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      backgroundColor: color.lighter,
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      fontFamily: FONT_FAMILY,
      backgroundColor: color.lighter,
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR,
      fontFamily: FONT_FAMILY,
    },
  },
  checkbox: {
    normal: {
      marginBottom: 4,
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4,
    },
  },
  pickerContainer: {
    normal: {
      marginBottom: 2,
      borderRadius: 2,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
    },
    error: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
    },
    open: {
      // Alter styles when select container is open
    },
  },
  select: {
    normal: Platform.select({
      android: {
        paddingLeft: 7,
        color: INPUT_COLOR,
        backgroundColor: color.lighter,
        borderColor: color.red,
      },
      ios: {
        backgroundColor: color.lighter,
      },
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: ERROR_COLOR,
        backgroundColor: color.lighter,
        borderColor: color.red,
      },
      ios: {
        marginBottom: 2,
        borderRadius: 2,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        backgroundColor: color.lighter,
      },
    }),
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: color.lighter,
      borderRadius: 4,
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY,
    },
    error: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: color.lighter,
      borderRadius: 4,
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY,
    },
    active: {
      borderBottomWidth: 1,
      borderColor: BORDER_COLOR,
      backgroundColor: color.lighter,
      borderRadius: 4,
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY,
    },
  },
  pickerValue: {
    normal: {
      fontSize: FONT_SIZE,
      paddingLeft: 7,
      fontFamily: FONT_FAMILY,
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7,
      fontFamily: FONT_FAMILY,
    },
  },
  datepicker: {
    normal: {
      marginBottom: 4,
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4,
    },
  },
  // Esse item agrupa o select de data no ios
  dateTouchable: {
    normal: {
      marginBottom: 2,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      backgroundColor: color.lighter,
    },
    error: {
      marginBottom: 2,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      backgroundColor: color.lighter,
    },
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginTop: 2,
      marginBottom: 2,
      borderRadius: 4,
      fontFamily: FONT_FAMILY,
      backgroundColor: color.lighter,

    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginTop: 2,
      marginBottom: 2,
      borderRadius: 4,
      fontFamily: FONT_FAMILY,
      backgroundColor: color.lighter,
    },
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textboxPass: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 50,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      fontFamily: FONT_FAMILY,
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      fontFamily: FONT_FAMILY,
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR,
      fontFamily: FONT_FAMILY,
    },
  },
});

module.exports = stylesheet;

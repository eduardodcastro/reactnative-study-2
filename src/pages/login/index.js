import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LogarUsuarioActions } from '~/store/ducks/logarUsuario';
import { Creators as TaskListActions } from '~/store/ducks/taskList';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Platform,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { colors, images } from '~/styles';
import styles from './styles';

class LogarUsuario extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Login',
      headerStyle: {
        backgroundColor: colors.sucess,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.dark,
      headerTruncatedBackTitle: null,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  allowsInput = true;

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };
  }

  // async componentDidMount() {

  // }

  verifyLogin = async () => {
    const { logarUsuarioRequest, taskListRequest } = this.props;
    logarUsuarioRequest();
    // taskListRequest();
    const { navigate } = this.props.navigation;
    navigate('Task');
  };

  render() {
    // console.tron.log('PROPS', this.props);
    const { navigation } = this.props;

    return (
      <View style={styles.mainContainer}>
        {/* <View style={styles.containerHeader}>
          <Text style={styles.mainTitle}>TAREFA FÁCIL</Text>
        </View> */}
        <View style={styles.containerContent}>
          <Icon
            name={Platform.OS === 'ios' ? 'tasks' : 'tasks'}
            color={colors.blackOpacity80}
            size={Platform.OS === 'ios' ? 120 : 120}
            // style={styles.iconCircle}
          />
        </View>
        <View style={styles.containerFooter}>
          <View style={styles.containerInput}>
            {/* <Text style={styles.textInput}>Nome</Text>
            <TextInput
              placeholder="Digite seu nome"
              placeholderTextColor={colors.blackOpacity80}
              underlineColorAndroid={colors.mediumGreyOpacity40}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              // style={[styles.inputText, this.state.styleTextColor]}
              style={styles.inputText}
              onChangeText={textName => this.hasUpperCase(textName)}
            /> */}
          </View>

          <TouchableOpacity
            style={styles.buttonLogIn}
            activeOpacity={0.8}
            // disabled={!logInValid}
            onPress={() => this.verifyLogin()}
          >
            <LinearGradient
              colors={[colors.lightBlue, colors.mediumBlue]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  logarUsuario: state.logarUsuario,
  taskList: state.taskList,
});

const allCreators = {
  ...LogarUsuarioActions,
  ...TaskListActions,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(allCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogarUsuario);

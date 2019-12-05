import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LogarUsuarioActions } from '~/store/ducks/logarUsuario';
import { Creators as TaskListActions } from '~/store/ducks/taskList';
import _ from 'lodash';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  AsyncStorage,
  Platform,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import TaskItems from '~/components/taskItems';
import Loading from '~/components/loading';
import { general, colors, images } from '~/styles';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
class Task extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Empresas',
      headerStyle: {
        backgroundColor: colors.sucess,
        borderBottomWidth: 0,
      },
      headerLeft: (
        <TouchableOpacity
          style={general.btnBack}
          onPress={() => navigation.goBack(null)}
        >
          <Icon name="ios-arrow-back" size={25} color={colors.dark} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          style={general.btnBack}
          onPress={navigation.getParam('setGoOut')}
        >
          <Icon name="ios-log-out" size={25} color={colors.dark} />
        </TouchableOpacity>
      ),
      headerTintColor: colors.dark,
      headerTruncatedBackTitle: null,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerMode: 'none',
    };
  };

  userId = null;

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // let value = await AsyncStorage.getItem('@Modeldev:user');
    // console.tron.log('USER', value);
    this.props.navigation.setParams({ setGoOut: () => this.goOut() });
    await this.getDataTask();
  }

  goOut = async () => {
    const { navigation } = this.props;

    // Apaga os dados do AsyncStorage
    await AsyncStorage.removeItem('@Modeldev:user');
    // Navega para a página de Login
    navigation.navigate('Login');
  };

  getDataTask = async () => {
    const { taskListRequest, logarUsuarioRequest } = this.props;
    taskListRequest();
    // logarUsuarioRequest();
  };

  getUserResponsible = () => {
    const { navigation } = this.props;
    navigation.navigate('Responsible', {
      item: 1,
    });
  };

  renderEmptyList = () => {
    return (
      <View>
        <Text>A Lista está vazia.</Text>
      </View>
    );
  };

  render() {
    console.tron.log('PROPS', this.props);
    const { taskList } = this.props;

    return (
      // (!taskList.loading && taskList.data && !logarUsuario.loading && logarUsuario.data) ? <View><Text>abc</Text></View> : <Loading show={taskList.loading} />
      !taskList.loading && taskList.data ? (
        <View style={styles.mainContainer}>
          <FlatList
            data={taskList.data.enterprises}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TaskItems
                idTask={item.id}
                title={item.enterprise_name}
                description={item.description}
                photo={item.photo}
                city={item.city}
                onPress={this.getUserResponsible}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListEmptyComponent={this.renderEmptyList()}
          />
        </View>
      ) : (
        <Loading show={taskList.loading} />
      )
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
)(Task);

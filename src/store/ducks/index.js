import { combineReducers } from 'redux';
import logarUsuario from './logarUsuario';
import taskList from './taskList';

const reducers = combineReducers({
  logarUsuario,
  taskList,
});

export default reducers;

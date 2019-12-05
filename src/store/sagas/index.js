import { all, takeLatest } from 'redux-saga/effects';
import { Types as LogarUsuarioTypes } from '~/store/ducks/logarUsuario';
import { Types as TaskListTypes } from '~/store/ducks/taskList';

import { LogarUsuarioRequest } from './logarUsuario';
import { TaskListRequest } from './taskList';

export default function* rootSaga() {
  yield all([takeLatest(LogarUsuarioTypes.ADD_REQUEST, LogarUsuarioRequest)]);
  yield all([takeLatest(TaskListTypes.ADD_REQUEST, TaskListRequest)]);
}

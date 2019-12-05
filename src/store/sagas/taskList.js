import api from '~/services';
import { call, put } from 'redux-saga/effects';
import Analytics from 'appcenter-analytics';
import FuncoesUteis from '~/utils';

import { Creators as taskListActions } from '~/store/ducks/taskList';
import global from '~/services/global';

export function* TaskListRequest(action) {
  const requestURL = 'https://empresas.ioasys.com.br/api/v1/enterprises';
  const headers = {
    headers: {
      'access-token': 'Qh_pFZ0VovGc6JNfSPMl-A',
      'client': 'RlDgln1toI7fcVt-8yTdzg',
      'uid': 'testeapple@ioasys.com.br',
    },
  };
  try {
    const response = yield call(api.get, requestURL, headers);
    if (!response.data.erro) {
      // Analytics.trackEvent('Login', { Status: 'Acessou' });
      yield put(taskListActions.taskListSuccess(response.data));
    } else {
      yield put(taskListActions.taskListError(response.data.mensagem));
    }
  } catch (err) {
    yield put(taskListActions.taskListError(global.noconnection));
  }
}

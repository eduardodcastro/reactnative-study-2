import api from '~/services';
import { call, put } from 'redux-saga/effects';
import Analytics from 'appcenter-analytics';
import FuncoesUteis from '~/utils';

import { Creators as logarUsuarioActions } from '~/store/ducks/logarUsuario';
import global from '~/services/global';

export function* LogarUsuarioRequest(action) {
  try {
    const response = yield call(
      api.post,
      'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in',
      {
        email: 'testeapple@ioasys.com.br',
        password: '12341234',
      },
    );
    if (!response.data.erro) {
      // Analytics.trackEvent('Login', { Status: 'Acessou' });
      yield put(logarUsuarioActions.logarUsuarioSuccess(response.data));
    } else {
      yield put(logarUsuarioActions.logarUsuarioError(response.data.mensagem));
    }
  } catch (err) {
    yield put(logarUsuarioActions.logarUsuarioError(global.noconnection));
  }
}

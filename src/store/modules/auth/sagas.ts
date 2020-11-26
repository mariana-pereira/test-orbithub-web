import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { SignInRequestAction } from './types';

import { signInSuccess, signInFailure } from './actions';

export function* signIn(action: SignInRequestAction) {
  try {
    const { username, password } = action.payload;

    const response = yield call(api.post, 'session', { username, password });
    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/home');
  } catch (error) {
    yield put(signInFailure());
  }
}

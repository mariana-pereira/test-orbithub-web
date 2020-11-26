import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

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
    toast.error('Authentication failed. Check your credentials.');
    yield put(signInFailure());
  }
}

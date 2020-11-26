import { action } from 'typesafe-actions';
import { AuthTypes, Credentials, User } from './types';

export const signInRequest = (credentials: Credentials) =>
  action(AuthTypes.SIGN_IN_REQUEST, credentials);

export const signInSuccess = (token: string, user: User) =>
  action(AuthTypes.SIGN_IN_SUCCESS, { token, user });

export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);

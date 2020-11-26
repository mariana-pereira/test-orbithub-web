/**
 * Action types
 */

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_RESQUEST',
   SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
   SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE'
 }

export interface SignInRequestAction {
  type: typeof AuthTypes.SIGN_IN_REQUEST
  payload: Credentials;
}

export interface SignInSuccessAction {
  type: typeof AuthTypes.SIGN_IN_SUCCESS
  payload: {
    token: string;
    user: User;
  };
}

export interface SignFailureAction {
  type: typeof AuthTypes.SIGN_IN_FAILURE
}

/**
 * Data types
 */

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Credentials {
  username: string;
  password: string;
}

/**
* State type
*/

export interface AuthState {
  readonly token: string;
  readonly signed: boolean;
  readonly loading: boolean;
}

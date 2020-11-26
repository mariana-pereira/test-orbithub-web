/**
 * Action types
 */

export enum AuthTypes {
  AUTH_REQUEST = '@auth/AUTH_RESQUEST',
}

/**
 * Data types
 */

export interface AuthData {
 id: number;
}

/**
* State type
*/

export interface AuthState {
 readonly data: AuthData[];
 readonly loading: boolean;
 readonly error: boolean;
}

import { Record } from 'immutable';
import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types';


export const AuthState = new Record({
  authenticated: false,
  id: null,
  authType: ''
});


export function authReducer(state = new AuthState(), { payload, type }) {
  switch (type) {
    case INIT_AUTH:
    case SIGN_IN_SUCCESS:

      return state.merge({
        authType: payload ? payload.providerData[0].providerId.split('.')[0] : '',
        authenticated: !!payload,
        id: payload ? payload.uid : null
      });

    case SIGN_OUT_SUCCESS:
      return new AuthState();

    default:
      return state;
  }
}

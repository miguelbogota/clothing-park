import { ShopUserNull } from 'core/models/user.model';
import { ReduxDispatch } from './root.models';

/** Type with the actions for the user. */
export type UserStateActions =
  'SET_CURRENT_USER' |
  'GOOGLE_SIGN_IN_START' |
  'EMAIL_SIGN_IN_START' |
  'SIGN_IN_SUCCESS' |
  'SIGN_IN_FAILURE' |
  'CHECK_USER_SESSION'
;

/** Dispatch interface for the user.  */
export type UserActions<T = unknown> = ReduxDispatch<UserStateActions, T>

/** Model for the state the user will have */
export interface UserState {
  currentUser: ShopUserNull
  error: Error | null;
}

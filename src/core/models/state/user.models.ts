import { ShopUserNull } from 'core/models/user.model';
import { ReduxDispatch } from './root.models';

/** Type with the actions for the user. */
export type UserStateActions =
  'SET_CURRENT_USER' |
  'GOOGLE_SIGN_IN_START' |
  'GOOGLE_SIGN_IN_SUCCESS' |
  'GOOGLE_SIGN_IN_FAILURE' |
  'EMAIL_SIGN_IN_START' |
  'EMAIL_SIGN_IN_SUCCESS' |
  'EMAIL_SIGN_IN_FAILURE'
;

/** Dispatch interface for the user.  */
export type UserActions = ReduxDispatch<UserStateActions>

/** Model for the state the user will have */
export interface UserState {
  currentUser: ShopUserNull
  error: Error | null;
}

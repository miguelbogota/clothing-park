import { ShopUserNull } from 'core/models/user.model';
import { ReduxDispatch } from '../../state/root.models';

/** Type with the actions for the user. */
export type UserStateActions = 'SET_CURRENT_USER';

/** Dispatch interface for the user.  */
export type UserActions = ReduxDispatch<UserStateActions>

/** Model for the state the user will have */
export interface UserState {
  currentUser: ShopUserNull
}

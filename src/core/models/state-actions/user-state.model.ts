import { ReduxStates } from 'core/models/state-actions/state.model';
import { ShopUserNull } from 'core/models/user.model';

/** Type with the actions for the user. */
export type UserStateActions = 'SET_CURRENT_USER';

/** Type with return type and actions for user.  */
export type UserActions = ReduxStates<UserStateActions>

/** Model for the state the user will have */
export interface UserState {
  current: ShopUserNull
}

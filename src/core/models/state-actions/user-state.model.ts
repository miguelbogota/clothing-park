import { ReduxStates } from 'core/models/state.model';

/** Type with the actions for the user. */
export type UserStateActions = 'SET_CURRENT_USER';

/** Type with return type and actions for user.  */
export type UserActions<T> = ReduxStates<UserStateActions, T>

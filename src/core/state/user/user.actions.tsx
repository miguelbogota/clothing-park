import { UserActions, UserState } from 'core/models/state-actions/user-state.model';

export const setCurrentUser = (userState: UserState): UserActions => {
  return { type: 'SET_CURRENT_USER', payload: userState };
};

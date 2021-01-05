import { UserActions, UserState } from '../../models/state/user.models';

export const setCurrentUser = (userState: UserState): UserActions => {
  return { type: 'SET_CURRENT_USER', payload: userState };
};

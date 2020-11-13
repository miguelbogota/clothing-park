import { ShopUserNull } from 'core/models/user.model';
import { UserActions } from 'core/models/state-actions/user-state.model';

export const setCurrentUser = (user: ShopUserNull): UserActions<ShopUserNull> => ({ type: 'SET_CURRENT_USER', payload: user });

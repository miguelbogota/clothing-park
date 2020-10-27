import { ReduxState } from 'core/models/state.model';
import { ShopUser } from 'core/models/user.model';

export const setCurrentUser = (user: ShopUser): ReduxState<ShopUser> => ({ type: 'SET_CURRENT_USER', payload: user });

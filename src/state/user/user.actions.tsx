import { ReduxState } from 'core/models/state.model';
import { ShopUserNull } from 'core/models/user.model';

export const setCurrentUser = (user: ShopUserNull): ReduxState<ShopUserNull> => ({ type: 'SET_CURRENT_USER', payload: user });

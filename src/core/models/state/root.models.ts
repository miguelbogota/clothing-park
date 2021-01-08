import { CartState } from './cart.models';
import { DirectoryState } from './directory.models';
import { ShopState } from './shop.models';
import { UserState } from './user.models';

/** Interface of the data to . */
export interface ReduxDispatch<T, P = unknown> {
  type: T;
  payload?: P;
}

/** Root of state interface. */
export interface RootState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
}

import { CartState } from '../models/state/cart.models';
import { UserState } from '../models/state/user.models';

/** Interface of the data to . */
export interface ReduxDispatch<T> {
  type: T;
  payload?: unknown;
}

/** Root of state interface. */
export interface RootState {
  user: UserState;
  cart: CartState;
}

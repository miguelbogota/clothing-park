import { CartState } from './cart-state.model';
import { UserState } from './user-state.model';

/** This how the state will be store with Redux. */
export interface ReduxStates<T> {
  type: T;
  payload?: any;
}

/** Root reducer interface. */
export interface ReduxReducer {
  user: UserState;
  cart: CartState;
}

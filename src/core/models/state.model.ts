import { ShopUser } from 'core/models/user.model';

/**
 * This how the state will be store with Redux.
 */
export interface ReduxState<T> {
  type: string;
  payload: T;
}

export interface ReduxReducer {
  user: ShopUser | null;
}

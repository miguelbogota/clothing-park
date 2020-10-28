import { ShopUserNull } from 'core/models/user.model';

/** This how the state will be store with Redux. */
export interface ReduxStates<T, P> {
  type: T;
  payload: P;
}

/** Root reducer interface. */
export interface ReduxReducer {
  user: ShopUserNull;
}

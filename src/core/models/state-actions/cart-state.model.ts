import { ReduxStates } from 'core/models/state.model';

/** Type with the actions for the cart. */
export type CartStateActions = 'TOGGLE_CART_HIDDEN';

/** Type with return type and actions for cart.  */
export type CartActions<T> = ReduxStates<CartStateActions, T>

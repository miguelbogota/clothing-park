import { ReduxStates } from 'core/models/state-actions/state.model';
import { ShopItem } from '../item.model';

/** Type with the actions for the cart. */
export type CartStateActions = 'TOGGLE_CART_HIDDEN' | 'ADD_ITEM';

/** Type with return type and actions for cart.  */
export type CartActions = ReduxStates<CartStateActions>

/** State for the cart. */
export interface CartState {
  hidden: boolean;
  cartItems: ShopItem[];
}

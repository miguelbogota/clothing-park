import { ShopItem } from 'core/models/item.model';
import { ReduxDispatch } from '../../state/root.models';

/** Type with the actions for the cart. */
export type CartStateActions = 'TOGGLE_CART_HIDDEN' | 'ADD_ITEM';

/** Dispatch interface for the cart.  */
export type CartActions = ReduxDispatch<CartStateActions>

/** State for the cart. */
export interface CartState {
  hidden: boolean;
  cartItems: ShopItem[];
}

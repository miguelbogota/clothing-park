import { CartActions } from 'core/models/state-actions/cart-state.model';

export const toggleCartHidden = (): CartActions<boolean> => ({ type: 'TOGGLE_CART_HIDDEN' });

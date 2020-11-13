import { CartActions } from 'core/models/state-actions/cart-state.model';

export const cartReducer = (state = false, action: CartActions<boolean>): boolean => {

  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN': return !state;
    default: return state;
  }

};

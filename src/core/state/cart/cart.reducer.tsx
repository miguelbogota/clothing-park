import { CartActions, CartState } from 'core/models/state-actions/cart-state.model';
import { addItemToCart } from './cart.util';

const INITIAL_VALUES: CartState = {
  hidden: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_VALUES, action: CartActions): CartState => {

  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN': return { ...state, hidden: !state.hidden };
    case 'ADD_ITEM': return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    default: return state;
  }

};

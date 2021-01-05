import { addItemToCart } from './cart.util';
import { CartActions, CartState } from '../../models/state/cart.models';
import { ShopItem } from 'core/models/item.model';

const INITIAL_VALUES: CartState = {
  hidden: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_VALUES, action: CartActions): CartState => {

  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN': return { ...state, hidden: !state.hidden };
    case 'ADD_ITEM': return { ...state, cartItems: addItemToCart(state.cartItems, action.payload as ShopItem) };
    default: return state;
  }

};

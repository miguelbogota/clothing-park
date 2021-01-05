import { addItemToCart, removeItemFromCart } from './cart.util';
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
    case 'REMOVE_ITEM': return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload as ShopItem) };
    case 'CLEAR_CART': return { ...state, cartItems: action.payload as ShopItem[] };
    case 'CLEAR_ITEM_FROM_CART': return {
      ...state,
      cartItems: state.cartItems.filter(cartItem => cartItem.id !== (action.payload as ShopItem).id),
    };
    default: return state;
  }

};

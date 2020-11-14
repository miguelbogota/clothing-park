import { ShopItem } from 'core/models/item.model';
import { CartActions } from 'core/models/state-actions/cart-state.model';

export const toggleCartHidden = (): CartActions => {
  return { type: 'TOGGLE_CART_HIDDEN' };
};

export const addItem = (item: ShopItem): CartActions => {
  return { type: 'ADD_ITEM', payload: item };
};

import { ShopItem } from 'core/models/item.model';
import { CartActions } from '../../models/state/cart.models';

export const toggleCartHidden = (): CartActions => ({ type: 'TOGGLE_CART_HIDDEN' });

export const addItem = (item: ShopItem): CartActions => ({ type: 'ADD_ITEM', payload: item });

export const removeItem = (item: ShopItem): CartActions => ({ type: 'REMOVE_ITEM', payload: item });

export const clearItemFromCart = (item: ShopItem): CartActions => ({ type: 'CLEAR_ITEM_FROM_CART', payload: item });

export const clearCart = (): CartActions => ({ type: 'CLEAR_CART' });

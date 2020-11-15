import { ShopItem } from 'core/models/item.model';

/**
 * Function will handle adding a new item to the cart and the quantity adding up.
 * @param cartItems The current cart items in the state are needed.
 * @param cartItemToAdd New item to add to the cart.
 */
export const addItemToCart = (cartItems: ShopItem[], cartItemToAdd: ShopItem): ShopItem[] => {
  const existingCartItem = cartItems.find((cartItem: ShopItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem: ShopItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity + 1 : 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 } as ShopItem];
};

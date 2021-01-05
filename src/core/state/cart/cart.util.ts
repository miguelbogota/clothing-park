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
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 } as ShopItem];
};

/**
 * Function will hanlde removing a item from the cart, if there's one item that
 * matches it will decrease the quantity and if the quantity is 0 it will remove the item.
 * @param cartItems The current cart items in the state are needed.
 * @param cartItemToRemove Item to remove from the cart.
 */
export const removeItemFromCart = (cartItems: ShopItem[], cartItemToRemove: ShopItem): ShopItem[] => {
  const existingCartItem = cartItems.find((cartItem: ShopItem) => cartItem.id === cartItemToRemove.id);
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity - 1 : 0 }
      : cartItem,
  );
};

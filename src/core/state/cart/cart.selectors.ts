import { createSelector } from 'reselect';
import { RootState } from '../../models/state/root.models';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + (item.quantity ? item.quantity : 0), 0),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + (item.quantity ? item.quantity : 0) * item.price, 0),
);

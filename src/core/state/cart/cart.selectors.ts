import { createSelector } from 'reselect';
import { RootState } from '../root.models';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + (item.quantity ? item.quantity : 0), 0),
);

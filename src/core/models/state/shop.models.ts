import { ReduxDispatch } from './root.models';
import { ShopCollection } from '../collection.model';

/** Type with the actions for the shop. */
export type ShopStateActions = '';

/** Dispatch interface for the shop.  */
export type ShopActions = ReduxDispatch<ShopStateActions>

/** Model for the state the shop will have */
export interface ShopState {
  collections: {
    hats: ShopCollection;
    jackets: ShopCollection;
    sneakers: ShopCollection;
    women: ShopCollection;
    men: ShopCollection;
  };
}

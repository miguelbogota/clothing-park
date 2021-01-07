import { ReduxDispatch } from './root.models';
import { ShopCollection } from '../collection.model';

/** Type with the actions for the shop. */
export type ShopStateActions = 'UPDATE_COLLECTIONS';

/** Dispatch interface for the shop.  */
export type ShopActions = ReduxDispatch<ShopStateActions>

export interface ShopCollectionsState {
  hats: ShopCollection;
  jackets: ShopCollection;
  sneakers: ShopCollection;
  womens: ShopCollection;
  mens: ShopCollection;
}

/** Model for the state the shop will have */
export interface ShopState {
  collections: ShopCollectionsState | null;
}

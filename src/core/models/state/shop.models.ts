import { ReduxDispatch } from './root.models';
import { ShopCollection } from '../collection.model';

/** Type with the actions for the shop. */
export type ShopStateActions = 'FETCH_COLLECTIONS_START' | 'FETCH_COLLECTIONS_SUCCESS' | 'FETCH_COLLECTIONS_FAILURE';

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
  isFetching: boolean;
  errorMessage: string | null;
}

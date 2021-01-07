import { ShopActions, ShopCollectionsState } from '../../models/state/shop.models';

export const updateCollection = (collectionsMap: ShopCollectionsState): ShopActions => {
  return { type: 'UPDATE_COLLECTIONS', payload: collectionsMap };
};

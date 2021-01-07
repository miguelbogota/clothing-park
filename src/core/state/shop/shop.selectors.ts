import { createSelector } from 'reselect';
import { RootState } from '../../models/state/root.models';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector([selectShop], directory => directory.collections);

export const selectShopCollection = (collectionUrlParam: 'hats' | 'jackets' | 'sneakers' | 'womens' | 'mens') =>
  createSelector([selectShopCollections], collection => collection[collectionUrlParam]);

export const selectShopCollectionsArray = createSelector(
  [selectShopCollections],
  (collections) => {
    const collectionsKeys = Object.keys(collections);
    type CollectionKeyType = keyof typeof collections;
    return collectionsKeys.map(keyName => collections[keyName as CollectionKeyType]);
  },
);

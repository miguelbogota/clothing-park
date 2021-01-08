import { createSelector } from 'reselect';
import { RootState } from '../../models/state/root.models';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector([selectShop], directory => directory.collections);

export const selectShopCollection = (collectionUrlParam: 'hats' | 'jackets' | 'sneakers' | 'womens' | 'mens') =>
  createSelector([selectShopCollections], collection => !collection ? null : collection[collectionUrlParam]);

export const selectShopCollectionsArray = createSelector(
  [selectShopCollections],
  (collections) => {
    if (!collections) { return []; }
    const collectionsKeys = Object.keys(collections);
    type CollectionKeyType = keyof typeof collections;
    return collectionsKeys.map(keyName => collections[keyName as CollectionKeyType]);
  },
);

export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);

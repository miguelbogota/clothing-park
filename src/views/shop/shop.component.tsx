import React, { FC, useEffect, useState } from 'react';
import { ShopContainer } from './shop.styles';
import { Route, useRouteMatch } from 'react-router-dom';
import { CollectionsOverview } from 'components/collections-overview/collections-overview.component';
import { CollectionPage } from 'views/collection/collection.component';
import { convertCollectionSnapshotToMap, firestore } from 'core/services/firebase/firebase.service';
import { useDispatch, useSelector } from 'react-redux';
import { updateCollection } from 'core/state/shop/shop.actions';
import { WithSpinner } from 'components/with-spinner/with-spinner.component';
import { selectShopCollectionsArray } from 'core/state/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


export const ShopPage: FC = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const collections = useSelector(selectShopCollectionsArray);
  const [isLoading, setIsLoading] = useState(!collections.length);

  useEffect(() => {
    // Only fetch if there's no collections.
    if (!collections.length) {
      const collectionRef = firestore.collection('collections');
      // const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      collectionRef.onSnapshot(async (snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(updateCollection(collectionMap));
        setIsLoading(false);
      });
      // return () => unsubscribeFromSnapshot();
    }
  }, [dispatch, setIsLoading, collections]);

  return (
    <ShopContainer>
      <Route
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
        exact
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
      />
    </ShopContainer>
  );
};

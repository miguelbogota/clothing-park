import React, { FC, useEffect } from 'react';
import { ShopContainer } from './shop.styles';
import { Route, useRouteMatch } from 'react-router-dom';
import { CollectionsOverview } from 'components/collections-overview/collections-overview.component';
import { CollectionPage } from 'views/collection/collection.component';
import { convertCollectionSnapshotToMap, firestore } from 'core/services/firebase/firebase.service';
import { useDispatch } from 'react-redux';
import { updateCollection } from 'core/state/shop/shop.actions';

export const ShopPage: FC = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(updateCollection(collectionMap));
    });
    return () => unsubscribeFromSnapshot();
  }, [dispatch]);

  return (
    <ShopContainer>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopContainer>
  );
};

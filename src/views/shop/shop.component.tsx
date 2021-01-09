import React, { FC, useEffect } from 'react';
import { ShopContainer } from './shop.styles';
import { Route, useRouteMatch } from 'react-router-dom';
import { CollectionsOverview } from 'components/collections-overview/collections-overview.component';
import { CollectionPage } from 'views/collection/collection.component';
import { useDispatch, useSelector } from 'react-redux';
import { WithSpinner } from 'components/with-spinner/with-spinner.component';
import { fetchCollectionsStart } from 'core/state/shop/shop.actions';
import { selectIsCollectionsLoaded } from 'core/state/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export const ShopPage: FC = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const isCollectionEmpty = !useSelector(selectIsCollectionsLoaded);

  useEffect(() => {
    // Only fetch if there's no collections.
    if (isCollectionEmpty) {
      dispatch(fetchCollectionsStart());
    }
  }, [dispatch, isCollectionEmpty]);

  return (
    <ShopContainer>
      <Route path={`${match.path}`} component={CollectionsOverviewWithSpinner} exact />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageWithSpinner} />
    </ShopContainer>
  );
};

export default ShopPage;

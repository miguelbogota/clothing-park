import React, { FC } from 'react';
import { ShopContainer } from './shop.styles';
import { Route, useRouteMatch } from 'react-router-dom';
import { CollectionsOverview } from 'components/collections-overview/collections-overview.component';
import { CollectionPage } from 'views/collection/collection.component';

export const Shop: FC = () => {
  const match = useRouteMatch();
  return (
    <ShopContainer>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopContainer>
  );
};

import React, { FC } from 'react';
import './shop.styles.scss';
import { Route, useRouteMatch } from 'react-router-dom';
import { CollectionOverview } from 'components/collection-overview/collection-overview.component';
import { CollectionPage } from 'views/collection/collection.component';

export const Shop: FC = () => {
  const match = useRouteMatch();
  return (
    <div className='shop-page'>
      <Route path={`${match.path}`} component={CollectionOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

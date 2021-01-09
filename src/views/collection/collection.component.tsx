import React, { FC } from 'react';
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection.styles';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { selectShopCollection } from 'core/state/shop/shop.selectors';
import { CollectionItem } from 'components/collection-item/collection-item.component';

export const CollectionPage: FC = () => {
  const match = useRouteMatch<{ collectionId: 'hats' | 'jackets' | 'sneakers' | 'womens' | 'mens' }>();
  const collection = useSelector(selectShopCollection(match.params.collectionId));
  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection?.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection?.items.map(item => <CollectionItem key={item.id} item={item} />)}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;

import React, { FC } from 'react';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { selectShopCollection } from 'core/state/shop/shop.selectors';
import { CollectionItem } from 'components/collection-item/collection-item.component';

export const CollectionPage: FC = () => {
  const match = useRouteMatch<{ collectionId: 'hats' | 'jackets' | 'sneakers' | 'women' | 'men' }>();
  const collection = useSelector(selectShopCollection(match.params.collectionId));
  return (
    <div className='collection-page'>
      <h2 className='title'>{collection?.title}</h2>
      <div className="items">
        {collection?.items.map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

import React, { FC } from 'react';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { useSelector } from 'react-redux';
import { selectShopCollections } from 'core/state/shop/shop.selectors';
import { CollectionPreview } from 'components/collection-preview/collection-preview.component';

export const CollectionsOverview: FC = () => {
  const collections = useSelector(selectShopCollections);
  const collectionsKeys = Object.keys(collections);
  type ColKey = keyof typeof collections;
  return (
    <CollectionsOverviewContainer>
      {collectionsKeys.map(keyName => (
        <CollectionPreview
          key={collections[keyName as ColKey].id}
          id={collections[keyName as ColKey].id}
          items={collections[keyName as ColKey].items}
          routeName={collections[keyName as ColKey].routeName}
          title={collections[keyName as ColKey].title}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};

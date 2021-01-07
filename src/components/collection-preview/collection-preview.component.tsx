import React, { FC } from 'react';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './collection-preview.styles';
import { ShopCollection } from 'core/models/collection.model';
import { CollectionItem } from 'components/collection-item/collection-item.component';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const CollectionPreview: FC<ShopCollection> = ({ title, items, routeName }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

import React, { FC } from 'react';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './collection-preview.styles';
import { ShopCollection } from 'core/models/collection.model';
import { CollectionItem } from 'components/collection-item/collection-item.component';

export const CollectionPreview: FC<ShopCollection> = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
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

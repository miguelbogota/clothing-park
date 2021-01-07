import React, { FC } from 'react';
import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';
import { ShopItem } from 'core/models/item.model';
import { useDispatch } from 'react-redux';
import { addItem } from 'core/state/cart/cart.actions';

export const CollectionItem: FC<{ item: ShopItem; }> = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addItem(item))}>Add To Cart</AddButton>
    </CollectionItemContainer>
  );
};


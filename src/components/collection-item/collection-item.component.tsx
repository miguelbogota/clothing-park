import React, { FC } from 'react';
import './collection-item.styles.scss';
import { ShopItem } from 'core/models/item.model';
import { UIButton } from 'components/ui-button/ui-button.component';
import { useDispatch } from 'react-redux';
import { addItem } from 'core/state/cart/cart.actions';

export const CollectionItem: FC<{ item: ShopItem; }> = ({ item = { name: '', imageUrl: '', price: 0 } }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <UIButton className='ui-button' inverted onClick={() => dispatch(addItem(item))}>Add To Cart</UIButton>
    </div>
  );
};


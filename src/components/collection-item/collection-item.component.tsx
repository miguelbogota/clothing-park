import React, { Dispatch, FC } from 'react';
import './collection-item.styles.scss';
import { ShopItem } from 'core/models/item.model';
import { UIButton } from 'components/ui-button/ui-button.component';
import { connect } from 'react-redux';
import { CartActions } from 'core/models/state-actions/cart-state.model';
import { addItem } from 'state/cart/cart.actions';

const unHandled = () => console.error('Not handled');

interface ConnectedDispatch {
  addItem?: (item: ShopItem) => void;
}

interface CollectionItemProps extends ConnectedDispatch {
  item: ShopItem
}

const CollectionItemBase: FC<CollectionItemProps> = ({
  item = { name: '', imageUrl: '', price: 0 },
  addItem = unHandled
}) => {
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
      <UIButton className='ui-button' inverted onClick={() => addItem(item)}>Add To Cart</UIButton>
    </div>
  );
};

const mapDispatchToProps = (dispath: Dispatch<CartActions>): ConnectedDispatch => {
  return { addItem: (item: ShopItem) => dispath(addItem(item)) };
};

export const CollectionItem: FC<CollectionItemProps> = connect(null, mapDispatchToProps)(CollectionItemBase);

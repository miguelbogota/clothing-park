import { ShopActions, ShopCollectionsState, ShopState } from '../../models/state/shop.models';

// Can't change routeName
const INITIAL_VALUES: ShopState = {
  collections: null,
};

export const shopReducer = (state = INITIAL_VALUES, action: ShopActions): ShopState => {

  switch (action.type) {
    case 'UPDATE_COLLECTIONS': return { ...state, collections: action.payload as ShopCollectionsState };
    default: return state;
  }

};

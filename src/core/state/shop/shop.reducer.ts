import { ShopActions, ShopCollectionsState, ShopState } from '../../models/state/shop.models';

// Can't change routeName
const INITIAL_VALUES: ShopState = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

export const shopReducer = (state = INITIAL_VALUES, action: ShopActions): ShopState => {

  switch (action.type) {
    case 'FETCH_COLLECTIONS_START': return {
      ...state,
      isFetching: true,
    };
    case 'FETCH_COLLECTIONS_SUCCESS': return {
      ...state,
      isFetching: false,
      collections: action.payload as ShopCollectionsState,
    };
    case 'FETCH_COLLECTIONS_FAILURE': return {
      ...state,
      isFetching: false,
      errorMessage: action.payload as string,
    };
    default: return state;
  }

};

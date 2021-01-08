import { ShopActions, ShopCollectionsState } from '../../models/state/shop.models';
import { convertCollectionsSnapshotToMap, firestore } from 'core/services/firebase/firebase.service';
import { Dispatch } from 'redux';

export const fetchCollectionsStart = (): ShopActions => ({ type: 'FETCH_COLLECTIONS_START' });

export const fetchCollectionsSuccess = (collectionsMap: ShopCollectionsState): ShopActions => ({
  type: 'FETCH_COLLECTIONS_SUCCESS',
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: string): ShopActions => ({
  type: 'FETCH_COLLECTIONS_FAILURE',
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch<ShopActions>) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

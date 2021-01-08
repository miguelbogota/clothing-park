import { reduxSaga } from './root.store';
import { fetchCollectionsStart } from './shop/shop.sagas';

export const runSagas = () => {
  reduxSaga.run(fetchCollectionsStart);
};

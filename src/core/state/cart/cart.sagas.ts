import { UserStateActions } from 'core/models/state/user.models';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { clearCart } from './cart.actions';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest<UserStateActions>('SIGN_OUT_SUCCESS', clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
  ]);
}

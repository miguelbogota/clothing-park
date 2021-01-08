import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserStateActions } from 'core/models/state/user.models';
import { auth, createUserProfileDocument, googleProvider } from 'core/services/firebase/firebase.service';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';

type userRefType = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
type snapshotType = firebase.firestore.DocumentSnapshot<firebase.auth.UserCredential>;
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef: userRefType = yield call(createUserProfileDocument, user, {});
    const snapshot: snapshotType = yield userRef.get();
    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  }
  catch (error) { yield put(googleSignInFailure(error)); }
}

export function* onGoogleSignInStart() {
  yield takeLatest<UserStateActions>('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
  ]);
}

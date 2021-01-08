import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActions, UserStateActions } from 'core/models/state/user.models';
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from 'core/services/firebase/firebase.service';
import { signInFailure, signInSuccess } from './user.actions';

type userRefType = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
type snapshotType = firebase.firestore.DocumentSnapshot<firebase.auth.UserCredential>;

export function* getSnapshotFromUserAuth(user: firebase.User | null) {
  try {
    const userRef: userRefType = yield call(createUserProfileDocument, user, {});
    const snapshot: snapshotType = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  }
  catch (error) { yield put(signInFailure(error)); }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  }
  catch (error) { yield put(signInFailure(error)); }
}

interface emailAndPassword { email: string; password: string }
export function* signInWithEmail({ payload }: UserActions<emailAndPassword>) {
  // Get the email and password as strings if there's any
  const email = payload?.email ? payload.email : '';
  const password = payload?.password ? payload.password : '';
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  }
  catch (error) { yield put(signInFailure(error)); }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) { return; }
    yield getSnapshotFromUserAuth(userAuth);
  }
  catch (error) { yield put(signInFailure(error)); }
}

export function* onGoogleSignInStart() {
  yield takeLatest<UserStateActions>('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest<UserStateActions>('EMAIL_SIGN_IN_START', signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest<UserStateActions>('CHECK_USER_SESSION', isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
  ]);
}

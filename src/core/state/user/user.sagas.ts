import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActions, UserStateActions } from 'core/models/state/user.models';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.actions';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from 'core/services/firebase/firebase.service';

type userRefType = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
type snapshotType = firebase.firestore.DocumentSnapshot<firebase.auth.UserCredential>;

function* getSnapshotFromUserAuth(user: firebase.User | null, addDate: any) {
  try {
    const userRef: userRefType = yield call(createUserProfileDocument, user, addDate);
    const snapshot: snapshotType = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  }
  catch (error) { yield put(signInFailure(error)); }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user, {});
  }
  catch (error) { yield put(signInFailure(error)); }
}

interface emailAndPassword { email: string; password: string }
function* signInWithEmail({ payload }: UserActions<emailAndPassword>) {
  // Get the email and password as strings if there's any
  const email = payload?.email ? payload.email : '';
  const password = payload?.password ? payload.password : '';
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, {});
  }
  catch (error) { yield put(signInFailure(error)); }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) { return; }
    yield getSnapshotFromUserAuth(userAuth, {});
  }
  catch (error) { yield put(signInFailure(error)); }
}

function* signOutFromApp() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  }
  catch (error) { yield put(signOutFailure(error)); }
}

interface Credentials { email: string; password: string; displayName: string }
function* signUpToApp({ payload }: UserActions<Credentials>) {
  // Get the email, password and displayName as strings if there's any
  const email = payload?.email ? payload.email : '';
  const password = payload?.password ? payload.password : '';
  const displayName = payload?.displayName ? payload.displayName : '';
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, displayName }));
  }
  catch (error) { yield put(signUpFailure(error)); }
}


interface SignInAfterSignUpType { user: firebase.User | null; displayName: string }
function* signInAfterSignUp({ payload }: UserActions<SignInAfterSignUpType>) {
  // Get the email, password and displayName as strings if there's any
  const user = payload?.user ? payload.user : null;
  const displayName = payload?.displayName ? payload.displayName : '';
  yield getSnapshotFromUserAuth(user, { displayName });
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

export function* onSignOutStart() {
  yield takeLatest<UserStateActions>('SIGN_OUT_START', signOutFromApp);
}

export function* onSignUpStart() {
  yield takeLatest<UserStateActions>('SIGN_UP_START', signUpToApp);
}

export function* onSignUpSuccess() {
  yield takeLatest<UserStateActions>('SIGN_UP_SUCCESS', signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}

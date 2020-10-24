import { FirebaseConfig } from '_env';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp(FirebaseConfig);

/** Firestore from firebase. */
export const firestore = firebase.firestore();
/** Authentication from firebase. */
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
/** Sign in with pop up from Google. */
export const signInWithGoogle = (): Promise<firebase.auth.UserCredential> => auth.signInWithPopup(provider);

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

/**
 * Function adds the signed in user into the firestore db.
 * @param userAuth User to add to the db.
 * @param additionalData Additional data to merge with the user.
 */
export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData: any,
): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | null> => {
  if (!userAuth) { return null; }
  const docRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await docRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try { await docRef.set({ displayName, email, photoURL, createdAt, ...additionalData }); }
    catch (err) { console.error('Error creating user in Firestore.', err); }
  }
  return docRef;
};

/**
 * Function adds object in Firestore in a given path.
 * @param collectionName Name of the collection to add.
 * @param objectsToAdd Objects or array to add in Firestore.
 */
export const addCollectionAndItem = async <T>(collectionName: string, objectsToAdd: T[]): Promise<void> => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

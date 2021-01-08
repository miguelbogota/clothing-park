import { UserActions, UserState } from '../../models/state/user.models';

export const setCurrentUser = (userState: UserState): UserActions => {
  return { type: 'SET_CURRENT_USER', payload: userState };
};

export const googleSignInStart = (): UserActions => {
  return { type: 'GOOGLE_SIGN_IN_START' };
};

export const googleSignInSuccess = (user: any): UserActions => {
  return { type: 'GOOGLE_SIGN_IN_SUCCESS', payload: user };
};

export const googleSignInFailure = (error: Error): UserActions => {
  return { type: 'GOOGLE_SIGN_IN_FAILURE', payload: error };
};

export const emailSignInStart = (emailAndPassword: { email: string; password: string }): UserActions => {
  return { type: 'EMAIL_SIGN_IN_START', payload: emailAndPassword };
};

export const emailSignInSuccess = (user: any): UserActions => {
  return { type: 'EMAIL_SIGN_IN_SUCCESS', payload: user };
};

export const emailSignInFailure = (error: Error): UserActions => {
  return { type: 'EMAIL_SIGN_IN_FAILURE', payload: error };
};

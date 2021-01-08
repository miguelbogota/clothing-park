import { UserActions } from '../../models/state/user.models';

export const googleSignInStart = (): UserActions => {
  return { type: 'GOOGLE_SIGN_IN_START' };
};

export const emailSignInStart = (emailAndPassword: { email: string; password: string }): UserActions => {
  return { type: 'EMAIL_SIGN_IN_START', payload: emailAndPassword };
};

export const signInSuccess = (user: any): UserActions => {
  return { type: 'SIGN_IN_SUCCESS', payload: user };
};

export const signInFailure = (error: Error): UserActions => {
  return { type: 'SIGN_IN_FAILURE', payload: error };
};

export const checkUserSession = (): UserActions => {
  return { type: 'CHECK_USER_SESSION' };
};

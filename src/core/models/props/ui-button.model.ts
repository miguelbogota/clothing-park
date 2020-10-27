import { ComponentPropsWithoutRef } from 'react';

/**
 * Required props for the UI Button.
 */
export interface UIButtonProps extends ComponentPropsWithoutRef<'button'> {
  isGoogleSignIn?: boolean;
}

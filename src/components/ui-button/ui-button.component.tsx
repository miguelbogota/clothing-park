import React, { FC } from 'react';
import './ui-button.styles.scss';
import { UIButtonProps } from 'core/models/props/ui-button.model';

export const UIButton: FC<UIButtonProps> = ({ children = null, type = 'button', isGoogleSignIn = false, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in ' : ''} ui-button`}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

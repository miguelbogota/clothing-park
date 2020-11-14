import React, { FC } from 'react';
import './ui-button.styles.scss';
import { UIButtonProps } from 'core/models/props/ui-button.model';

export const UIButton: FC<UIButtonProps> = ({
  children = null,
  type = 'button',
  isGoogleSignIn = false,
  inverted = false,
  ...otherProps
}) => {
  return (
    <button
      className={`ui-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''}`}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

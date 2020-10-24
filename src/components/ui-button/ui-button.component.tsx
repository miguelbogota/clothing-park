import React, { FC } from 'react';
import './ui-button.styles.scss';
import { UIButtonProps } from 'core/models/ui-button-props.model';

export const UIButton: FC<UIButtonProps> = ({ children = null, type = 'button', color = '#333333', ...otherProps }) => {
  return (
    <button
      className='ui-button'
      type={type}
      style={{ backgroundColor: color }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

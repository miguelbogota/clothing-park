import React, { FC } from 'react';
import { UIButtonContainer } from './ui-button.styles';
import { UIButtonProps } from 'core/models/props/ui-button.model';

export const UIButton: FC<UIButtonProps> = ({ children, ...props }) => {
  return (
    <UIButtonContainer {...props}>{children}</UIButtonContainer>
  );
};

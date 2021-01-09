import React, { FC } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './ui-spinner.styles';

export const UISpinner: FC = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

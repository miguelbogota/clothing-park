import React, { FC } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export const WithSpinner = (WrapperComponent: FC): FC<{ isLoading: boolean; }> => {
  const Spinner: FC<{ isLoading: boolean; }> = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

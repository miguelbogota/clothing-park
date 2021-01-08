import { selectIsCollectionsLoaded } from 'core/state/shop/shop.selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export const WithSpinner = (WrapperComponent: FC): FC => {
  const Spinner: FC = ({ ...otherProps }) => {
    const isCollectionEmpty = !useSelector(selectIsCollectionsLoaded);
    return isCollectionEmpty ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

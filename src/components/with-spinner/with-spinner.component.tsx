import { UISpinner } from 'components/ui-spinner/ui-spinner.componet';
import { selectIsCollectionsLoaded } from 'core/state/shop/shop.selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
// import { WithSpinnerContainer } from './with-spinner.styles';

export const WithSpinner = (WrapperComponent: FC): FC => {
  const Spinner: FC = ({ ...otherProps }) => {
    const isCollectionEmpty = !useSelector(selectIsCollectionsLoaded);
    return isCollectionEmpty ? <UISpinner /> : <WrapperComponent {...otherProps} />;
  };
  return Spinner;
};

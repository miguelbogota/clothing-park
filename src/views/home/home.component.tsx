import React, { FC } from 'react';
import { HomePageContainer } from './home.styles';
import { Directory } from 'components/directory/directory.component';

export const HomePage: FC = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

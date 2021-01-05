import { Directory } from 'components/directory/directory.component';
import React, { FC } from 'react';
import './home.styles.scss';

export const Home: FC = () => {
  return (
    <div className='home-page'>
      <Directory />
    </div>
  );
};

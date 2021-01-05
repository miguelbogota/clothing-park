import React, { FC } from 'react';
import './home.styles.scss';
import { Directory } from 'components/directory/directory.component';

export const Home: FC = () => {
  return (
    <div className='home-page'>
      <Directory />
    </div>
  );
};

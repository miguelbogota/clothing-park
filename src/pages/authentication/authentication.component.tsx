import React, { FC } from 'react';
import './authentication.styles.scss';
import { SignIn } from 'components/sign-in/sign-in.component';

export const Authentication: FC = () => {
  return (
    <div className='authentication-page'>
      <SignIn />
    </div>
  );
};

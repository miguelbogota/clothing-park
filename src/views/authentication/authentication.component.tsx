import React, { FC } from 'react';
import { AuthenticationContainer } from './authentication.styles';
import { SignIn } from 'components/sign-in/sign-in.component';
import { SignUp } from 'components/sign-up/sign-up.component';

export const AuthenticationPage: FC = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default AuthenticationPage;

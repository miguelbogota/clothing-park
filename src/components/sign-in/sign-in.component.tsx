import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './sign-in.styles.scss';

import { SignInFormProps } from 'core/models/sign-in-props.model';
import { FormInput } from 'components/form-input/form-input.component';
import { UIButton } from 'components/ui-button/ui-button.component';
import { signInWithGoogle } from 'core/services/firebase/firebase.service';

export const SignIn: FC = () => {

  const [signInForm, setSignInForm] = useState<SignInFormProps>({ email: '', password: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSignInForm({ email: '', password: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInForm((prevState) => ({ ...prevState, [name]: value } as SignInFormProps));
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name='email'
          id='sign-in-email'
          type='email'
          value={signInForm.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          name='password'
          id='sign-in-password'
          type='password'
          value={signInForm.password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <UIButton type='submit'>Sign In</UIButton>
          <UIButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</UIButton>
        </div>
      </form>
    </div>
  );
};

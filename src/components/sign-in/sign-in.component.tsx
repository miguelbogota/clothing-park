import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './sign-in.styles.scss';
import { SignInFormProps } from 'core/models/sign-in-props.model';
import { FormInput } from 'components/form-input/form-input.component';
import { UIButton } from 'components/ui-button/ui-button.component';

export const SignIn: FC = () => {
  const [signInForm, setSignInForm] = useState<SignInFormProps>({ email: '', password: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSignInForm({ email: '', password: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInForm((prevState) => ({ ...prevState, [name]: value } as never));
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          id='sign-in-email'
          type='email'
          value={signInForm.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          label='password'
          id='sign-in-password'
          type='password'
          value={signInForm.password}
          handleChange={handleChange}
          required
        />
        <UIButton type='submit'>Sign In</UIButton>
      </form>
    </div>
  );
};

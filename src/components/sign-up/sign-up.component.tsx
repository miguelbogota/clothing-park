import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import { SignUpFormProps } from 'core/models/props/sign-up.model';
import { FormInput } from 'components/form-input/form-input.component';
import { UIButton } from 'components/ui-button/ui-button.component';
import { useDispatch } from 'react-redux';
import { signUpStart } from 'core/state/user/user.actions';

export const SignUp: FC = () => {
  const dispatch = useDispatch();
  const INITIAL_VALUES = { displayName: '', email: '', password: '', confirmPassword: '' };
  const [signUpForm, setSignUpForm] = useState<SignUpFormProps>(INITIAL_VALUES);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { password, confirmPassword } = signUpForm;
    if (password !== confirmPassword) { alert('Password do not match, please check them!'); return; }
    dispatch(signUpStart(signUpForm));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((prevState) => ({ ...prevState, [name]: value } as SignUpFormProps));
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign Up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          name='displayName'
          id='sign-up-display-name'
          type='text'
          value={signUpForm.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Email'
          name='email'
          id='sign-up-email'
          type='email'
          value={signUpForm.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          name='password'
          id='sign-up-password'
          type='password'
          value={signUpForm.password}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          id='sign-in-confirm-password'
          type='password'
          value={signUpForm.confirmPassword}
          onChange={handleChange}
          required
        />
        <UIButton type='submit'>Sign Up</UIButton>
      </form>
    </SignUpContainer>
  );
};

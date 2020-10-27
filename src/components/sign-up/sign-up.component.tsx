import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './sign-up.styles.scss';

import { SignUpFormProps } from 'core/models/props/sign-up.model';
import { FormInput } from 'components/form-input/form-input.component';
import { UIButton } from 'components/ui-button/ui-button.component';
import { auth, createUserProfileDocument } from 'core/services/firebase/firebase.service';

export const SignUp: FC = () => {

  const [signUpForm, setSignUpForm] = useState<SignUpFormProps>({ displayName: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = signUpForm;
    if (password !== confirmPassword) { alert('Password do not match, please check them!'); return; }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setSignUpForm({ displayName: '', email: '', password: '', confirmPassword: '' });
    }
    catch (err) { console.error('Error creating user in Firestore.', err); }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((prevState) => ({ ...prevState, [name]: value } as SignUpFormProps));
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
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
    </div>
  );
};

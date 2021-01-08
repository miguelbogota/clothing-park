import React, { FC } from 'react';
import { FormInputContainer, FormInputLabel, GroupContainer } from './form-input.styles';
import { FormInputProps } from 'core/models/props/form-input.model';

export const FormInput: FC<FormInputProps> = ({ label, id, ...InputProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer id={id} {...InputProps} />
      {
        label
          ? (<FormInputLabel className={InputProps.value.length ? 'shrink' : ''} htmlFor={id}>{label}</FormInputLabel>)
          : null
      }
    </GroupContainer>
  );
};

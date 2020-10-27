import React, { FC } from 'react';
import './form-input.styles.scss';
import { FormInputProps } from 'core/models/form-input-props.model';

/**
 * Functions returns a string with random caracters as an Id.
 * @param length Lenth of string.
 */
const generateRandomId = (length: number) => {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
};

export const FormInput: FC<FormInputProps> = ({ label = '', id = generateRandomId(10), ...InputProps }) => {
  return (
    <div className='group'>
      <input className='form-input' id={id} {...InputProps} />
      {
        label
          ? (<label className={`form-input-label${InputProps.value.length ? ' shrink' : ''}`} htmlFor={id}>{label}</label>)
          : null
      }
    </div>
  );
};

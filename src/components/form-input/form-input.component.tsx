import React, { ChangeEvent, FC } from 'react';
import './form-input.styles.scss';
import { FormInputProps } from 'core/models/form-input-props.model';

/** Function sends an error if handler is not passed. */
const hanldeChangeInit = (e: ChangeEvent<HTMLInputElement>) => {
  console.error(`Unable to handle change event in input: ${e.target.name}`);
};

/**
 * Functions returns a string with random caracters as an Id.
 * @param length Lenth of string.
 */
const generateRandomId = (length: number) => {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
};

export const FormInput: FC<FormInputProps> = ({ handleChange = hanldeChangeInit, label = '', id = generateRandomId(10), ...InputProps }) => {
  return (
    <div className='group'>
      <input className='form-input' id={id} name={label} onChange={handleChange} {...InputProps} />
      {
        label
          ? (<label className={`form-input-label${InputProps.value.length ? ' shrink' : ''}`} htmlFor={id}>{label}</label>)
          : null
      }
    </div>
  );
};

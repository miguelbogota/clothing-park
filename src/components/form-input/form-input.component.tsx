import React, { FC } from 'react';
import './form-input.styles.scss';
import { FormInputProps } from 'core/models/props/form-input.model';

export const FormInput: FC<FormInputProps> = ({ label, id, ...InputProps }) => {
  return (
    <div className='group'>
      <input className='form-input' id={id} {...InputProps} />
      {
        label
          ? (
            <label className={`form-input-label ${InputProps.value.length ? 'shrink' : ''}`} htmlFor={id}>
              {label}
            </label>
          )
          : null
      }
    </div>
  );
};

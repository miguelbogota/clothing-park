import { ComponentPropsWithoutRef } from 'react';

/**
 * Required props for an form input.
 */
export interface FormInputProps extends ComponentPropsWithoutRef<'input'> {
  id: string;
  label: string;
  value: string;
}

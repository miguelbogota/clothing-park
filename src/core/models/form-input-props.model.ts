import { ChangeEvent } from 'react';

/**
 * Required props for an form input.
 */
export interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  required: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

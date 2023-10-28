import { Control } from 'react-hook-form';

export interface FormBase {
  label?: string;
  description?: string;
  name: string;
  control: Control;
}

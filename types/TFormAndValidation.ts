import { Dispatch, SetStateAction, ChangeEvent } from 'react';

export type TFormAndValidation = {
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  resetForm: () => void;
  setValues: Dispatch<SetStateAction<{}>>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  setErrors: Dispatch<SetStateAction<{}>>;
  values: {
    name?: string;
    email?: string;
    policy?: boolean;
    password?: string;
    repeatPassword?: string;
    avatar?: string;
  };
  errors: {
    name?: string;
    email?: string;
    policy?: string;
    password?: string;
    repeatPassword?: string;
    avatar?: string;
  };
}
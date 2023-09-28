import { useState, useCallback, ChangeEvent } from "react";

import { TFormAndValidation } from "@types";

export function useFormAndValidation(): TFormAndValidation {
  const [values, setValues] = useState<{}>({});
  const [errors, setErrors] = useState<{}>({});
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(
      (
        (evt.target as Element)?.closest("form") as HTMLFormElement
      )?.checkValidity()
    );
  };

  const resetForm = useCallback(
    (newValues: {} = {}, newErrors: {} = {}, newIsValid: boolean = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
    setErrors,
  };
}

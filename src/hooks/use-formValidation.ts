import { ChangeEvent, useState } from "react";

export interface FormData {
  email: string;
  password: string;
  nickname: string;
  phonenumber: string;
  birth: string;
  gender: string;
}

export interface Errors {
  email: boolean;
  password: boolean;
  nickname: boolean;
  phonenumber: boolean;
  birth: boolean;
  gender: boolean;
}

type ValidationRules = {
  [key: string]: (value: string) => boolean;
};

export type ChangeHandler = (
  event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
) => void;

const useFormValidation = (
  validationRules: ValidationRules
): [FormData, Errors, ChangeHandler] => {
  const initialFormData: FormData = {
    email: "",
    password: "",
    nickname: "",
    phonenumber: "",
    birth: "",
    gender: "",
  };

  const initialErrors: Errors = {
    email: false,
    password: false,
    nickname: false,
    phonenumber: false,
    birth: false,
    gender: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>(initialErrors);

  const onChangeHandler: ChangeHandler = (e) => {
    const { name, value } = e.target;
    const validationFunction = validationRules[name];
    const isValid = validationFunction(value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: !isValid,
    }));
  };

  return [formData, errors, onChangeHandler];
};

export default useFormValidation;

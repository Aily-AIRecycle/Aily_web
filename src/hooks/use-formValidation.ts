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
  [key in keyof FormData]: (value: string) => boolean;
};

export type ChangeHandler = (
  event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => void;

export type UpdateFormData = (newFormData: Partial<FormData>) => void;

const useFormValidation = (
  validationRules: ValidationRules
): [FormData, Errors, ChangeHandler, UpdateFormData] => {
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
    const validationFunction = validationRules[name as keyof FormData];
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

  const updateFormData: UpdateFormData = (newFormData) => {
    setFormData((prev) => ({
      ...prev,
      ...newFormData,
    }));
  };

  return [formData, errors, onChangeHandler, updateFormData];
};

export default useFormValidation;

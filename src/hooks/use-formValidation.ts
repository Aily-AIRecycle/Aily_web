import { useState } from "react";

const useFormValidation = (validationRules: { [x: string]: any; }) =>
{
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nickname: "",
    phonenumber: "",
    birth: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    nickname: false,
    phonenumber: false,
    birth: false,
    gender: false,
  });

  const onChangeHandler = (e: { target: { name: any; value: any; }; }) =>
  {
    const { name, value } = e.target;
    const validationFunction = validationRules[name];
    const isValid = validationFunction(value);


    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: !isValid,
    }))
  }

  return [formData, errors, onChangeHandler];
}

export default useFormValidation;
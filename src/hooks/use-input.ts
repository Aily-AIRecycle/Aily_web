import { useState } from "react";

function useInput<T>(initValue: T) {
  const [value, setValue] = useState(initValue);

  function onChange(e: { target: { value: T } }) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange,
  };
}

export default useInput;

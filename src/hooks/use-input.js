import { useState } from "react";

function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange,
  };
}

export default useInput;

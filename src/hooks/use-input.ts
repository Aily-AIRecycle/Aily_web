import { useState } from "react";

function useInput(initValue: any)
{
  const [value, setValue] = useState(initValue);

  function onChange(e: { target: { value: any; }; })
  {
    setValue(e.target.value);
  }

  return {
    value,
    onChange,
  };
}

export default useInput;

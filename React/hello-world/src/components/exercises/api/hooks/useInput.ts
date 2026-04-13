import { useState } from "react";

export const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue("");
  };

  const reset = (value: string) => {
    setValue(value);
  }

  return {
    value,
    onChange,
    clear,
    reset
  };
};

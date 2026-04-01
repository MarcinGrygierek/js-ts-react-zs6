import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

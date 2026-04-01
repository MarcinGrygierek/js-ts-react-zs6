import { useState } from "react";

export const useCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return {
    checked,
    onChange,
  };
};

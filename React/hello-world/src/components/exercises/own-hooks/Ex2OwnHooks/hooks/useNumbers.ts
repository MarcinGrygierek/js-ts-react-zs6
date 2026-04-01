import { useState } from "react";

export const useNumbers = () => {
  const [values, setValues] = useState<number[]>([]);

  const addNumber = () => {
    const randomValue = Math.round(Math.random() * 100);

    setValues((prev) => [...prev, randomValue]);
  };

  const deleteNumber = (indexToDelete: number) => {
    setValues((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return {
    values,
    addNumber,
    deleteNumber,
  };
};

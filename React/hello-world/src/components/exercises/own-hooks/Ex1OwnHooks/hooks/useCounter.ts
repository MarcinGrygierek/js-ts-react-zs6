import { useEffect, useState } from "react";

export const useCounter = (defaultValue: number) => {
  const [counter, setCounter] = useState(defaultValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return counter;
};

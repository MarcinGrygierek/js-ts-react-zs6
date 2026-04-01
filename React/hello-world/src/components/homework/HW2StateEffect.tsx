import { useEffect, useState } from "react";

export const HW2StateEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.title = counter.toString();
  }, [counter]);

  return <h1>{counter}</h1>;
};

import { useEffect, useState } from "react";

let amount = 0;
export const StrictModeTest = () => {
  const [counter, setCounter] = useState(0);

  // nieczyste renderowanie - wartość spoza zakresu
  console.log("RENDERED", amount++);

  useEffect(() => {
    console.log("Mounted");
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>{counter}</h1>
      <h2>{amount}</h2>
    </>
  );
};

import { useEffect, useState } from "react";

export const ConditionalExcercise1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 1 sposób
  if (counter % 2 === 0) {
    return <h1>Hello!</h1>;
  }
  
  return null;

  // 2 sposób
  //   return counter % 2 === 0 ? <h1>Hello!</h1> : null;

  // 3 sposób
  //   return counter % 2 === 0 && <h1>Hello!</h1>;
};

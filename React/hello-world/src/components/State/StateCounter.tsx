import { useState } from "react";

export const StateCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // ok - bezpośrednio podajemy nową wartość
    // setCounter(counter + 1);

    // lepiej - nowy stan na podstawie poprzedniego
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  return (
    <>
      <h1>{counter}</h1>

      <button onClick={handleIncrement}>+1</button>
    </>
  );
};

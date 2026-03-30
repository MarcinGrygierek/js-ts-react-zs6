import { use, useEffect, useState } from "react";

export const StateAndEffect = () => {
  const [elements, setElements] = useState<number[]>([1, 2, 3]);

  /* Niepoprawne */
  //   const [firstNumber, setFirstNumber] = useState(elements[0]);

  //   useEffect(() => {
  //     setFirstNumber(elements[0]);
  //   }, [elements]);
  /* */

  // Poprawne - nie ma sensu tworzenia osobnego stanu jezeli wartość
  // jest bezpośrednio zalezna od innego state
  const firstNumber = elements[0] ** 2;

  const addNewFirstNumber = () => {
    setElements((prev) => [Math.round(Math.random() * 100), ...prev]);
  };

  return (
    <>
      <button onClick={addNewFirstNumber}>Add new first number</button>
      <p>{elements.join(", ")}</p>
      <h1>{firstNumber}</h1>
    </>
  );
};

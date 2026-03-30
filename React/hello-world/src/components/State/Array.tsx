import { useState } from "react";

export const Array = () => {
  const [elements, setElements] = useState<number[]>([]);

  const addNewLastElement = () => {
    const newElement = Math.round(Math.random() * 100);
    setElements((prev) => {
      return [...prev, newElement];
    });
    // setElements((prev) => [...prev, newElement]);
  };

  const addNewFirstElement = () => {
    const newElement = Math.round(Math.random() * 100);

    // niepoprawnie - mutacja oryginalnej tablicy
    // elements.push(newElement);
    // setElements(elements);

    // poprawnie - utworzenie nowej tablicy
    setElements((prev) => {
      return [newElement, ...prev];
    });
  };

  const deleteFirstElement = () => {
    setElements((prev) => {
      const [_, ...newArray] = prev;
      return newArray;
    });
  };

  const deleteLastElement = () => {
    setElements((prev) => {
      const newArray = prev.slice(0, prev.length - 1);
      return newArray;
    });
  };

  const handleElementDelete = (indexToDelete: number) => {
    setElements((prev) => {
      return prev.filter((_, index) => index !== indexToDelete);
    });
  };

  return (
    <>
      <button onClick={addNewLastElement}>Add random element to the end</button>
      <button onClick={addNewFirstElement}>
        Add random element at the beginning
      </button>
      <button onClick={deleteFirstElement}>Delete first element</button>
      <button onClick={deleteLastElement}>Delete last element</button>
      <ul>
        {elements.map((el, index) => (
          <li key={index}>
            {el}
            <button onClick={() => handleElementDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

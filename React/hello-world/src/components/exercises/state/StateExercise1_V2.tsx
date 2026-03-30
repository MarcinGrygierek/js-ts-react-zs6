import { useState } from "react";

export const StateExcercise1_V2 = () => {
  const [letterOffset, setLetterOffset] = useState(0);

  const addNewLetter = () => {
    setLetterOffset((prev) => prev + 1);
  };

  const text = "Hello World";
  const normalizedText = text.substring(0, letterOffset);

  return (
    <>
      <h1>{normalizedText}</h1>
      <button onClick={addNewLetter}>Next letter</button>
    </>
  );
};

import { useState } from "react";

export const StateExcercise1 = () => {
  const [text, setText] = useState("");

  const addNewLetter = () => {
    setText((prev) => {
      const lettersCount = prev.length;
      return "Hello World".substring(0, lettersCount + 1);
    });
  };

  return (
    <>
      <h1>{text}</h1>
      <button onClick={addNewLetter}>Next letter</button>
    </>
  );
};

import React, { useState } from "react";
import { useInput } from "./hooks/useInput";

export const ComponentForms = () => {
  // Komponent niekontrolowany - wartość trzymana poza Reactem
  //   const [value, setValue] = useState("");
  //   const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setValue((e.target.elements[0] as HTMLInputElement).value);
  //   };
  //   return (
  //     <>
  //       <form onSubmit={handleSubmit}>
  //         <input type="text" name="login" />
  //         <button type="submit">Send</button>
  //       </form>
  //       {value}
  //     </>
  //   );

  // komponent kontrolowany
  //   const [value, setValue] = useState("");
  //   const [choice, setChoice] = useState("");

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };

  //   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setChoice(e.target.value);
  //   };

  //   return (
  //     <>
  //       <input type="text" name="login" value={value} onChange={handleChange} />
  //       <label>
  //         <input
  //           type="radio"
  //           name="choice"
  //           value="1"
  //           checked={choice === "1"}
  //           onChange={handleRadioChange}
  //         />
  //         1
  //       </label>
  //       <label>
  //         <input
  //           type="radio"
  //           name="choice"
  //           value="2"
  //           checked={choice === "2"}
  //           onChange={handleRadioChange}
  //         />
  //         2
  //       </label>
  //       <p>{value}</p>
  //       <p>
  //         {value.length > 3 ? "Longer than 3 chars" : "No longer than 3 chars"}
  //       </p>
  //     </>
  //   );

  // Komponent kontrolowany z własnym hookiem
  const loginInput = useInput("lorem-ipsum");
  const emailInput = useInput("lorem@input.com");
  const passwordInput = useInput("dolorSitAmet12321");

  const [invalid, setInvalid] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    setInvalid(false);
    setSent(false);
    e.preventDefault();

    if (!loginInput.value || !emailInput.value || !passwordInput.value) {
      setInvalid(true);
      return;
    }

    setSent(true);
    console.log(loginInput.value, emailInput.value, passwordInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" name="login" {...loginInput} /> */}
      <input
        type="text"
        name="login"
        value={loginInput.value}
        onChange={loginInput.onChange}
      />
      <input type="email" name="email" {...emailInput} />
      <input type="password" name="password" {...passwordInput} />

      <p>{loginInput.value}</p>
      <p>
        {loginInput.value.length > 3
          ? "Longer than 3 chars"
          : "No longer than 3 chars"}
      </p>
      {invalid && <p style={{ color: "red" }}>Form is invalid</p>}
      {sent && <p style={{ color: "green" }}>Form sent successfully</p>}
      <button type="submit">Send</button>
    </form>
  );
};

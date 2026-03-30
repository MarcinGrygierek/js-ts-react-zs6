import { useEffect, useState } from "react";

export type IntervalProps = {
  defaultValue: number;
};

export const Interval = ({ defaultValue }: IntervalProps) => {
  const [counter, setCounter] = useState(defaultValue);

  // poprawnie - pusta tablica zalezności - useEffect odpali funkcję tylko po pierwszym renderze komponentu
  //   useEffect(() => {
  //     console.log("Component mounted");
  //     setInterval(() => {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }, 1000);
  //   }, []);

  // reset i ustawienie licznika za kazda zmianą propsa defaultValue
  useEffect(() => {
    console.log("New default value", defaultValue);
    setCounter(defaultValue);

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [defaultValue]);

  console.log("Render");
  // Niepoprawne - kazdy kolejny render komponentu wygeneruje kolejny interwał
  //   setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  // Niepoprawne - kazda aktualizacja stanu powoduje kolejny render i wpadamy w pętlę
  //   setCounter((prevCounter) => prevCounter + 1);

  return <h1>{counter}</h1>;
};

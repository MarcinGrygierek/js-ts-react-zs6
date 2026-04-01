import { useCounter } from "./hooks/useCounter";

export const Ex1OwnHooks = () => {
  const counter = useCounter(100);

  return <h1>{counter}</h1>;
};

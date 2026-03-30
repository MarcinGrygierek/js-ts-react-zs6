import { StateCounter } from "./StateCounter";
import { StateUser } from "./StateUser";

export const State = () => {
  return (
    <>
      <StateUser defaultLastName="Lorem ipsum" />
      <StateCounter />
    </>
  );
};

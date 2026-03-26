import type { SyntheticEvent } from "react";
import { FunctionsAsProps1 } from "./FunctionsAsProps1";

export const FunctionsAsPropsParent = () => {
  const handleCall = (text: string) => {
    console.log(`I was called with ${text}`);
  };

  const handleClick = (e: SyntheticEvent) => {
    console.log("Div was clicked!", e);
  };

  return (
    <div style={{ padding: 16, background: "red" }} onClick={handleClick}>
      <FunctionsAsProps1 callback={handleCall} />
    </div>
  );
};

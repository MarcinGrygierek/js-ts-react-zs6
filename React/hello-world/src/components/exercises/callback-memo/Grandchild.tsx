import { memo } from "react";

export type GrandChildProps = {
  numbers: number[];
};

export const GrandChild = memo(({ numbers }: GrandChildProps) => {
  console.log("Grandchild render");
  return <h3>Grandchild, {numbers.join(", ")}</h3>;
});

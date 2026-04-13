import { memo, useMemo } from "react";
import { GrandChild } from "./Grandchild";

export type ChildProps = {
  first: number;
  second: number;
};

export const Child = memo(({ first, second }: ChildProps) => {
  console.log("Child render");

  const generateArray = () => {
    const result: number[] = [];
    for (let i = 0; i < second; i++) {
      result.push(Math.round(Math.random() * 100));
    }

    return result;
  };

  const newArray = useMemo(() => generateArray(), [second]);

  return (
    <>
      <h2>Child</h2>
      <GrandChild numbers={newArray} />
    </>
  );
});

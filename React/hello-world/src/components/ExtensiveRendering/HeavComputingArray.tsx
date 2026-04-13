import { memo } from "react";

export type HeavyComputingArrayProps = {
  values: number[];
};

export const HeavyComputingArray = memo(
  ({ values }: HeavyComputingArrayProps) => {
    console.log("HeavyComputingArray render");
    const calculate = (elements: number[]) => {
      let result = 0;
      for (let i = 0; i < 100000; i++) {
        result += elements.reduce((acc, curr) => curr + acc, 1);
      }

      return result;
    };

    const value = calculate(values);

    return <p>Heavy computing array: {value}</p>;
  },
);

import { memo } from "react";

export type HeavyComputingProps = {
    a: number;
    b: number;
}

export const HeavyComputing = memo(({a, b}: HeavyComputingProps) => {
  console.log("Heavy computing render");

  const calculate = (pA: number, pB: number) => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result = ((pA % pB) * (pB % 2) + pA / pB) % 360;
    }

    return Math.round(result);
  };

  const value = calculate(a, b);
  return <h2>{value}</h2>;
});

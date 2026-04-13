import { memo, useMemo, useState } from "react";

export type HeavyChildProps = {
  defaultA: number;
  defaultB: number;
};

export const HeavyChild = memo(({ defaultA, defaultB }: HeavyChildProps) => {
  const [a, setA] = useState<number>(defaultA);
  const [b, setB] = useState<number>(defaultB);

  console.log("HeavyChild render");
  const calculate = (valA: number, valB: number) => {
    console.log('Calculated');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result -= i % (valA * valB);
    }
    return result;
  };

  const handleAChange = () => {
    setA(Math.round(Math.random() * 100));
  };

  const handleBChange = () => {
    setB(Math.round(Math.random() * 100));
  };

  const result = useMemo(() => calculate(a, defaultB), [a, defaultB]);

  return (
    <>
      <h2>{result}</h2>
      <button onClick={handleAChange}>Change a</button>
      <button onClick={handleBChange}>Change b</button>
    </>
  );
});

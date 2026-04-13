import { useCallback, useMemo, useState } from "react";
import { HeavyComputing } from "./HeavyComputing";
import { HeavyComputingArray } from "./HeavComputingArray";
import { SmartButton } from "./SmartButton";

export const ExtensiveRendering = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);

  const generateArray = (factor: number) => {
    return [1, 2, 3, 4, 5].map((v) => v * factor);
  };

  const stableArray = useMemo(() => generateArray(counter), [counter]);

  const handleCounter = () => {
    setCounter((p) => p + 1);
  };

  const handleCounter2 = () => {
    setCounter2((p) => p + 1);
  };

  const handleCounter3 = () => {
    setCounter3((p) => p + 1);
  };

  const handleSmartClick = useCallback(() => {
    setCounter(0);
    setCounter2(0);
    setCounter3(0);
  }, []);

  return (
    <>
      <h1>
        {counter} | {counter2} | {counter3}
      </h1>
      <button onClick={handleCounter}>+1</button>
      <button onClick={handleCounter2}>+1</button>
      <button onClick={handleCounter3}>+1</button>
      <SmartButton onClick={handleSmartClick} />
      <HeavyComputing a={counter2} b={counter3} />
      <HeavyComputingArray values={stableArray} />
    </>
  );
};

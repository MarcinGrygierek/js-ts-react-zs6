import { useEffect, useState } from "react";
import { HeavyChild } from "./HeavyChild";

export const HeavyComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>{date.toISOString()}</h1>
      <HeavyChild defaultA={10} defaultB={5} />
    </>
  );
};

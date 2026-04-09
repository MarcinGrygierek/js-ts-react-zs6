import { useState } from "react";

export const Promises = () => {
  const [data, setData] = useState(0);

  const handleAsyncFetchData = async () => {
    console.log("Async fetch start");
    const prms = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const value = Math.round(Math.random() * 100000);
        resolve(value);
      }, 5000);
    });

    const result = await prms;
    setData(result);
    console.log("Async fetch end");
  };

  const handleFetchData = () => {
    console.log("Fetch start");
    const prms = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const value = Math.round(Math.random() * 100000);
        resolve(value);
      }, 5000);
    });

    prms.then((result: number) => {
      setData(result);
    });
    console.log("Fetch end");
    //
  };

  return (
    <>
      <p>{data}</p>
      <button onClick={handleFetchData}>Fetch data</button>
      <button onClick={handleAsyncFetchData}>Fetch async data</button>
    </>
  );
};

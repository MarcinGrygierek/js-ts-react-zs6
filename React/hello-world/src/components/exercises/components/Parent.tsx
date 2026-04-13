import { Child } from "./Child";

export const Parent = () => {
  console.log("Parent render");
  return (
    <>
      <h2>I am a parent</h2>
      <Child />
    </>
  );
};

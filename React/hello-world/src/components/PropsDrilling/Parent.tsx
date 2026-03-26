import { Child } from "./Child";

export type ParentProps = {
  text: string;
};

export const Parent = ({ text }: ParentProps) => {
  return (
    <>
      <h2>I am a parent</h2>
      <Child text={text} />
    </>
  );
};

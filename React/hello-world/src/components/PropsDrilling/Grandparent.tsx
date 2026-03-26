import { Parent } from "./Parent";

export type GrandparentProps = {
  text: string;
};

export const Grandparent = ({ text }: GrandparentProps) => {
  return (
    <>
      <h1>I am a grandfather</h1>
      <Parent text={text} />
    </>
  );
};

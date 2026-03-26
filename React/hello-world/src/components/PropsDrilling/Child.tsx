export type ChildProps = {
  text: string;
};

export const Child = ({ text }: ChildProps) => {
  return <h3>{text}</h3>;
};

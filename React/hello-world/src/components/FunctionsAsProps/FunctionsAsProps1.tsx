export type FunctionAsProps1Props = {
  callback: (text: string) => void;
};

export const FunctionsAsProps1 = ({ callback }: FunctionAsProps1Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    callback("Lorem ipsum");
  };

  return <button onClick={handleClick}>Click me!</button>;
};

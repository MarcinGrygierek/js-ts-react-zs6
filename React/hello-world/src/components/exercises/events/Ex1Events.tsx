import { Button } from "./Button";

export const Ex1Events = () => {
  const handleClick = (text: string) => {
    console.log(text);
  };

  return (
    <>
      <Button label="First" onClick={() => handleClick("Clicked first!")} />
      <Button label="Second" onClick={() => handleClick("Clicked second!")} />
      <Button label="Third" onClick={() => handleClick("Clicked third!")} />
    </>
  );
};

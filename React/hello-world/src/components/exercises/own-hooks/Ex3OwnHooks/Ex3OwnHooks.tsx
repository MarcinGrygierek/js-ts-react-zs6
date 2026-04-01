import { useRandomColor } from "./hooks/useRandomColor";

export const Ex3OwnHooks = () => {
  const colorLight = useRandomColor("light");
  const colorDark = useRandomColor("dark");
  console.log(colorDark, colorLight);
  return (
    <>
      <div style={{ width: 100, height: 100, background: colorDark }} />
      <div style={{ width: 100, height: 100, background: colorLight }} />
    </>
  );
};

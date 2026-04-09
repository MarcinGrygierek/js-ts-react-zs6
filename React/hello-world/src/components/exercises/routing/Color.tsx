import { useNavigate, useParams } from "react-router-dom";

export const Color = () => {
  const { r, g, b } = useParams<{ r: string; g: string; b: string }>();
  const navigate = useNavigate();

  const handleClick = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    navigate(`/color/${r}/${g}/${b}`);
  };

  return (
    <>
      <button onClick={handleClick}>Go to random color</button>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: `rgba(${r}, ${g}, ${b})`,
        }}
      />
    </>
  );
};

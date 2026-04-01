import { useState } from "react";

export const useRandomColor = (mode: "dark" | "light") => {
  const getColor = () => {
    const h = Math.round(Math.random() * 360);
    const s = Math.round(Math.random() * 100);
    const l = Math.round(Math.random() * 20 + (mode === "light" ? 80 : 0));

    return `hsl(${h}deg ${s}% ${l}%)`;
  };

  const [color] = useState(getColor());

  return color;
};

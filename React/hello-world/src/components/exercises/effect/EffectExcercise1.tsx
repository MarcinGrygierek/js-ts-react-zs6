import { useEffect, useState } from "react";

type Shape = {
  size: number;
  background: string;
  borderRadius: number;
  rotation: number;
  x: number;
  y: number;
};

export const EffectExcercise2 = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  const addNewBox = () => {
    const newShape: Shape = {
      size: Math.round(Math.random() * 500 + 50),
      x: Math.round(Math.random() * 800),
      y: Math.round(Math.random() * 800),
      rotation: Math.round(Math.random() * 360),
      borderRadius: Math.round(Math.random() * 10),
      background: `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`,
    };

    setShapes((prev) => [...prev, newShape]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addNewBox();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: 800,
          height: 800,
          border: "1px solid black",
          overflow: "hidden",
        }}
      >
        {shapes.map((shape, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: shape.x,
              top: shape.y,
              width: shape.size,
              height: shape.size,
              borderRadius: shape.borderRadius,
              background: shape.background,
              transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
            }}
          />
        ))}
      </div>
    </>
  );
};

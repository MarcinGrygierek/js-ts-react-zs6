import { useState, type SyntheticEvent } from "react";

type Coordinate = {
  x: number;
  y: number;
};

export const HW3StateEffect = () => {
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);

  const [coords, setCoords] = useState<Coordinate>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    setCoords({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <div
      style={{
        border: "1px solid red",
        width: 200,
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseMove={handleMouseMove}
    >
      ({coords.x}, {coords.y})
    </div>
  );
};

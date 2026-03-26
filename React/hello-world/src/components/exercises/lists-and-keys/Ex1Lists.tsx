type SingleElement = {
  id: number;
  color: string;
  size: number;
};

export const Ex1Lists = () => {
  const elements: SingleElement[] = [
    {
      id: 1,
      color: "red",
      size: 100,
    },
    {
      id: 2,
      color: "blue",
      size: 200,
    },
    {
      id: 3,
      color: "green",
      size: 300,
    },
  ];

  const mapped = elements.map((el) => (
    <div
      key={el.id}
      style={{
        width: el.size,
        height: el.size,
        background: el.color,
      }}
    />
  ));

  return mapped;
};

export const Ex3Attributes = () => {
  const getRandomColor = () => {
    const availableColors = ["red", "blue", "green", "yellow", "purple"];

    const randomIndex = Math.round(
      Math.random() * (availableColors.length - 1),
    );

    return availableColors[randomIndex];
  };

  return (
    <div
      style={{
        width: 100,
        height: 100,
        background: getRandomColor(),
      }}
    />
  );
};

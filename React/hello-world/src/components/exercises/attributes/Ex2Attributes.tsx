export const Ex2Attributes = () => {
  const getName = (name: string) => {
    return <h1>{name}</h1>;
  };

  return <div>{getName("Marcin")}</div>;
};

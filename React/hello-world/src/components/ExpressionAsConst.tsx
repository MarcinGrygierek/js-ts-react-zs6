export const ExpressionAsCont = () => {
  const val = 5 + 6;

  let elementVal = <p>Lorem ipsum - {val}</p>;

  if (val === 10) {
    elementVal = <h1>Dolor sit amet</h1>;
  }

  return <div>{elementVal}</div>;
  //   return <div>{val}</div>;
  //   return <div>{5 + 5}</div>;
};

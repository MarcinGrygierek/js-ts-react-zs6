export const NestingArrayElement = () => {
  // Źle - nie tworzymy ręcznie tablic elementów
  //   return [<div>1</div>, <div>2</div>, <div>3</div>];

  // Niepoprawnie - brak atrybutu key
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  // Lepiej - key jako index
  const numbersLi = numbers.map((val, index) => <li key={index}>{val}</li>);

  // return <ul>{numbersLi}</ul>;

  // Najwygodniej
  const betterNumbers = [
    { id: "afeaf", val: 1 },
    { id: "22afe", val: 2 },
    { id: "3fa33", val: 3 },
  ];

  const numberBetterLi = betterNumbers.map((val) => (
    <li key={val.id}>{val.val}</li>
  ));

  return <ul>{numberBetterLi}</ul>;
};

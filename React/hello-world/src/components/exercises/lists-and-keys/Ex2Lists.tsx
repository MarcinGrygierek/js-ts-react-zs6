export const Ex2Lists = () => {
  const text = "Lorem ipsum";

  // 1 - działa ale nie najbardziej czytelne
  //   return [...text].map((char, index) => (
  //     <li key={index}>{index % 2 ? char.toUpperCase() : char.toLowerCase()}</li>
  //   ));

  // 2 - trochę czytelniej
  const arrayOfLetters = [...text];

  const formatLetter = (char: string, index: number) => {
    if (index % 2 === 0) return char.toLowerCase();
    return char.toUpperCase();
  };

  return arrayOfLetters.map((char, index) => (
    <div key={index}>{formatLetter(char, index)}</div>
  ));
};

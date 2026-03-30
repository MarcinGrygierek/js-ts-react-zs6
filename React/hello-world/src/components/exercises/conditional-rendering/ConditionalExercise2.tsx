type UserData = {
  name?: string;
  lastname?: string;
  age?: number;
};

export type ConditionalExercise2Props = {
  user?: UserData;
};

export const ConditionalExercise2 = ({ user }: ConditionalExercise2Props) => {
  const getContent = () => {
    if (!user) return "Witaj nieznajomy!";

    if (!user.lastname || !user.name)
      return "Chyba się znamy ale nie do końca!";

    if (!user.age)
      return `Witaj ${user.name} ${user.lastname}, nie wiem czy mogę Cię tutaj
          wpuścić.`;

    return `Witaj ${user.name} ${user.lastname}, zapraszam do
        ${user.age >= 18 ? "pełnej" : "ograniczonej"} wersji serwisu`;
  };

  return <h1>{getContent()}</h1>;
};

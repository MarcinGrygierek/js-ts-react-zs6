export type HelloProps = {
  name: string;
  lastName: string;
};

export const Hello = ({ name, lastName }: HelloProps) => {
  return <h1>Witaj {name} {lastName}!</h1>;
};

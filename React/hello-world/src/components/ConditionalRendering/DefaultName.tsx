export type DefaultNameProps = {
  name?: string;
};

export const DefaultName = ({ name }: DefaultNameProps) => {
  return <h1>Witaj {name || 'Anonymous'}!</h1>;
};

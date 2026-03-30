export type AndTestIfProps = {
  firstLevel: boolean;
  secondLevel: boolean;
};

export const AndTestIf = ({ firstLevel, secondLevel }: AndTestIfProps) => {
  if (firstLevel && secondLevel) {
    return <h1>Access granted</h1>;
  }

  return null;
};

export type AndTestProps = {
  show: boolean;
};

export const AndTest = ({ show }: AndTestProps) => {
    // return <div>{show ? <h1>Visible</h1> : null}</div>;
  return <div>{show && <h1>Visible</h1>}</div>;
};

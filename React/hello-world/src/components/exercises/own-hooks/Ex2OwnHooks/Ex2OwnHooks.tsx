import { useNumbers } from "./hooks/useNumbers";

export const Ex2OwnHooks = () => {
  const { values, addNumber, deleteNumber } = useNumbers();

  return (
    <>
      <button onClick={addNumber}>Add</button>
      <ul>
        {values.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => deleteNumber(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

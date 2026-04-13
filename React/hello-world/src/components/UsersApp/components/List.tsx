export type ListElement = {
  id: string;
  value: string;
};

export type ListProps = {
  elements: ListElement[];
};

export const List = ({ elements }: ListProps) => {
  return (
    <ul>
      {elements.map((el) => (
        <li key={el.id}>{el.value}</li>
      ))}
    </ul>
  );
};

type User = {
  id: number;
  name: string;
};

export const Ex2Events = () => {
  const list: User[] = [
    {
      id: 1,
      name: "Marcin1",
    },
    {
      id: 2,
      name: "Marcin2",
    },
    {
      id: 3,
      name: "Marcin3",
    },
    {
      id: 4,
      name: "Marcin4",
    },
  ];

  const handleClick = (user: User) => {
    console.log(`User ${user.name} [${user.id}] clicked.`);
  };

  return (
    <ul>
      {list.map((el) => (
        <li key={el.id}>
          <p>{el.name}</p>
          <button onClick={() => handleClick(el)}>Click</button>
        </li>
      ))}
    </ul>
  );
};

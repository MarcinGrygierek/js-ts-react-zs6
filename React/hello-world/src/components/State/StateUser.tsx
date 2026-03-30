import { useState } from "react";

type User = {
  name: string;
  lastName: string;
};

export type StateUserProps = {
    defaultLastName: string;
}

export const StateUser = ({defaultLastName}: StateUserProps) => {
  const [user, setUser] = useState<User>({
    name: "John",
    lastName: defaultLastName,
  });

  const changeUserData = () => {
    // niepoprawne! Mutacja oryginalnego obiektu
    // user.lastName = 'Example';

    // poprawnie - wykorzystanie setUser
    setUser(prev => ({
        ...prev,
        lastName: 'Example'
    }));
  };

  return (
    <>
      <h2>
        {user.name} {user.lastName}
      </h2>
      <button onClick={changeUserData}>Change user data</button>
    </>
  );
};

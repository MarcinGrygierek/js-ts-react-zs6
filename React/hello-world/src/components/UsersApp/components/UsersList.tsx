import { useContext } from "react";
import { List } from "./List";
import { UsersContext } from "../context/UsersContext";

export const UsersList = () => {
  const { users } = useContext(UsersContext);
  return (
    <>
      <List
        elements={users.map((u) => ({
          id: u.id,
          value: `${u.name} [${u.age}]`,
        }))}
      />
    </>
  );
};

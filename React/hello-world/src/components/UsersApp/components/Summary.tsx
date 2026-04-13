import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export const Summary = () => {
  const { users } = useContext(UsersContext);
  return <p>Total users: {users.length} </p>;
};

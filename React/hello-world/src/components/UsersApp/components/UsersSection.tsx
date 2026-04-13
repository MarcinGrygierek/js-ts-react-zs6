import type { User } from "../types";
import { UsersList } from "./UsersList";

export const UsersSection = () => {
  return (
    <>
      <h2>All users</h2>
      <UsersList />
    </>
  );
};

import { createContext } from "react";
import type { User } from "../types";

export type UsersContextType = {
  users: User[];
};

export const UsersContext = createContext<UsersContextType>({
  users: [],
});

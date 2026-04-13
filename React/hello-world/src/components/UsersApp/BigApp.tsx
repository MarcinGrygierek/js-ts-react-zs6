import { useState } from "react";
import type { User } from "./types";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { UsersContext } from "./context/UsersContext";

export const BigApp = () => {
  const [users] = useState<User[]>([
    { id: "1", name: "Marcin", age: 23 },
    { id: "2", name: "Marcin2", age: 213 },
    { id: "23", name: "Marcin3", age: 232 },
    { id: "31", name: "Marcin3", age: 2 },
    { id: "45", name: "Marcin5", age: 3 },
  ]);

  return (
    // Poprzednie wersje reacta
    // <UsersContext.Provider
    <UsersContext
      value={{
        users,
      }}
    >
      <Main />
      <Footer />
      {/* </UsersContext.Provider> */}
    </UsersContext>
  );
};

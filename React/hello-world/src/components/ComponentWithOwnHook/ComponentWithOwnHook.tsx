import { useUser } from "./hooks/useUser";
import type { User } from "./types/user";

export const ComponentWithOwnHook = () => {
  const user: User = {
    name: "John",
    lastname: "Doe",
    age: 32,
    address: {
      city: "Warszawa",
      street: "Domyślna",
      postCode: "12-345",
    },
  };

  const { fullName, truncatedName, formattedAddress, isAdult, greet } =
    useUser(user);

  return (
    <>
      {/* <h1>{fullName}</h1> */}
      <h1>{truncatedName}</h1>
      <h2>{formattedAddress}</h2>
      <p>{isAdult ? greet() : "You need to grow up"}</p>
    </>
  );
};

import { useEffect, useState } from "react";
import type { User } from "../types/user";

export const useUser = (user: User) => {
  const [letterOffset, setLetterOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterOffset((p) => p + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fullName = `${user.name} ${user.lastname}`;
  const truncatedName = fullName.substring(0, letterOffset);

  const isAdult = user.age >= 18;

  const formattedAddress = `${user.address.street}, ${user.address.city} ${user.address.postCode}`;

  const greet = () => {
    return `Hello ${user.name}`;
  };

  return {
    fullName,
    truncatedName,
    isAdult,
    formattedAddress,
    greet,
  };
};

import { useState } from "react";
import { Vault } from "./Vault";

export const ConditionalRenderingIf = () => {
  const [isAccess, setIsAccess] = useState(false);

  const toggleAccess = () => {
    setIsAccess((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleAccess}>Change access</button>
      <Vault isAccess={isAccess} />
    </>
  );
};

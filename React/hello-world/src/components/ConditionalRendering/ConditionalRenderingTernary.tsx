export type ConditionalRenderingTernaryProps = {
  isAccess: boolean;
};

export const ConditionalRenderingTernary = ({
  isAccess,
}: ConditionalRenderingTernaryProps) => {
  // warunkowe renderowanie elementu
  //   return isAccess ? <h1>You have access</h1> : <h1>You don't have access</h1>;

  // warunkowe renderowanie zawartości elementu
  return <h1>{isAccess ? "You have access" : "You don't have access"}</h1>;
};

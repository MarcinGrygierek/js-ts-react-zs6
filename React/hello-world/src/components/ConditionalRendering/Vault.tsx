export type VaultProps = {
  isAccess: boolean;
};

export const Vault = ({
  isAccess,
}: VaultProps) => {
  if (isAccess) return <h1>You have the access.</h1>;
  return <h1>You have no access.</h1>;
};

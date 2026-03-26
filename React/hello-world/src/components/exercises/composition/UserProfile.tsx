export type UserProfileProps = {
  email: string;
};

export const UserProfile = ({ email }: UserProfileProps) => {
  return <span>{email}</span>;
};

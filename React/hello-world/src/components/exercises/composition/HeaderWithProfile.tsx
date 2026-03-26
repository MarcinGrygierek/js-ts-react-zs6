import { Header } from "./Header";
import { UserProfile } from "./UserProfile";

export const HeaderWithProfile = () => {
  return (
    <>
      <Header
        title="Lorem ipsum"
        right={<UserProfile email="lorem@ipsum.com" />}
      />
      <Header title="Lorem ipsum" right={<button>Click me!</button>} />
    </>
  );
};

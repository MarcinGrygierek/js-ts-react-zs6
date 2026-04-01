import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main>
      <p>I am the main layout!</p>
      <Outlet></Outlet>
    </main>
  );
};

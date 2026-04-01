import { Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <p>Learn something about me or the company.</p>
      <Outlet />
    </div>
  );
};

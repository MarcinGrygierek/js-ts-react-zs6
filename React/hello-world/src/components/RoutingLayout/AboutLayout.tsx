import { Link, Outlet } from "react-router-dom";

export const AboutLayout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/about/me">About me</Link>
          </li>
          <li>
            <Link to="/about/company">About company</Link>
          </li>
        </ul>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

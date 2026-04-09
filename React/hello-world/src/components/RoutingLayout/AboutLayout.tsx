import { Link, NavLink, Outlet } from "react-router-dom";

export const AboutLayout = () => {
  return (
    <div>
      <header>
        <ul>
          {/* <li>
            <a href="/about/me">About me</a>
          </li> */}
          <li>
            <NavLink to="/about/me">About me</NavLink>
          </li>
          <li>
            <NavLink
              to="/about/company"
              className={({ isActive }) => `${isActive ? "active-link" : ""}`}
              style={({ isActive }) => ({
                fontWeight: isActive ? 700 : 300,
              })}
            >
              About company
            </NavLink>
          </li>
        </ul>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

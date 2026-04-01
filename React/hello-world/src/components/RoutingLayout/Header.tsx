import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <span>LOGO</span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

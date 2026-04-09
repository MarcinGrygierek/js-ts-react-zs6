import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Color } from "./Color";

export const Ex2Routing = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to='/color/255/0/0'>Red</Link>
            </li>
            <li>
                <Link to='/color/0/255/0'>Green</Link>
            </li>
            <li>
                <Link to='/color/0/0/255'>Blue</Link>
            </li>
        </ul>
    </nav>
      <Routes>
        <Route path="/color/:r/:g/:b" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
};

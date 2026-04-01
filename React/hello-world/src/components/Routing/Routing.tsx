import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { AboutCompany } from "./AboutCompany";
import { About } from "./About";
import { AboutMain } from "./AboutMain";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about/me">About</Link>
      <Link to="/about/company">About company</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route index element={<AboutMain />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="company" element={<AboutCompany />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

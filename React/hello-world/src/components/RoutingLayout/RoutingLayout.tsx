import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Home } from "./Home";
import { AboutLayout } from "./AboutLayout";
import { AboutMe } from "./AboutMe";
import { AboutCompany } from "./AboutCompany";

export const RoutingLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route path="me" element={<AboutMe />} />
            <Route path="company" element={<AboutCompany />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

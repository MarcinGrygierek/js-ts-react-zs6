import { Navigate, Route, Routes } from "react-router-dom";
import { AboutLayout } from "./AboutLayout";
import { AboutMe } from "./AboutMe";
import { AboutCompany } from "./AboutCompany";
import { RedirectComponent } from "./RedirectComponent";
import { RedirectComponent2 } from "./RedirectComponent2";

export const About = () => {
  return (
    <Routes>
      <Route element={<AboutLayout />}>
        <Route path="me" element={<AboutMe />} />
        <Route path="company" element={<AboutCompany />} />
        <Route path="fallback" element={<RedirectComponent />} />
        <Route path="fallback-2" element={<RedirectComponent2 />} />
        <Route path="*" element={<Navigate to="/about" />} />
      </Route>
    </Routes>
  );
};

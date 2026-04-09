import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Home } from "./Home";
import { Product } from "./Product";
import { Payment } from "./Payment";
import { AccessProtectedRoute } from "./AccessProtectedRoute";
import { About } from "./About";

export const RoutingLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/product" element={<AccessProtectedRoute />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

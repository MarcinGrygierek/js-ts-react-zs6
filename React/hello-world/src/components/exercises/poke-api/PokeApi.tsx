import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./List";
import { Details } from "./Details";

export const PokeApi = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

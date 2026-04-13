import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./List";
import { Edit } from "./Edit";

export const Ex1Api = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

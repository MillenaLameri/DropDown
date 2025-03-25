import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../app/pages/home/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

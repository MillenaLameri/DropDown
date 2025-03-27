import { Routes, Route } from "react-router-dom";
import { Home } from "../app/pages/home/Home";
import { ToDoList } from "../app/pages/ToDoList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/toDoList" element={<ToDoList />} />
    </Routes>
  );
};

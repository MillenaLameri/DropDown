import { Routes, Route } from "react-router-dom";
import { Home } from "../app/pages/home/Home";
import { ToDoList } from "../app/pages/todolist/ToDoList";
import { Login } from "../app/pages/login/Login";
import { Register } from "../app/pages/register/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/toDoList" element={<ToDoList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

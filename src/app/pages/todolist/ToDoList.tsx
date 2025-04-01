import {
  Box,
  Card,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import Todo from "../../../assents/img/todolistimage.jpg";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Colors } from "../../../util/colors";
import { useTranslation } from "react-i18next";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const ToDoList = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask: Task = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const itemsLeft = tasks.filter((task) => !task.completed).length;

  return (
    <Box display="flex" flexDirection="column" sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          backgroundImage: `url(${Todo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "35vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="white">
          {t("todoTitle")}
        </Typography>
      </Box>
      <Container
        maxWidth="sm"
        sx={{ marginTop: "-50px", display: "flex", justifyContent: "flex-end" }}
      >
        <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: "550px" } }}>
          <TextField
            fullWidth
            placeholder={t("createTodo")}
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && addTask()}
            sx={{
              backgroundColor: theme === "dark" ? Colors.black3 : Colors.white2,
              borderRadius: "5px",
              fieldset: { border: "none" },
              padding: "10px",
              marginBottom: "20px",
              width: "100%",
              "& input": { color: theme === "dark" ? "white" : "black" },
            }}
          />
          <Card
            sx={{
              backgroundColor: theme === "dark" ? Colors.black3 : Colors.white2,
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
          >
            <List>
              {filteredTasks.map((task) => (
                <ListItem
                  key={task.id}
                  sx={{ borderBottom: "1px solid #c9c9ce", padding: "10px" }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => deleteTask(task.id)}
                    ></IconButton>
                  }
                >
                  <Checkbox
                    icon={<FavoriteBorder sx={{ color: "#777A92" }} />}
                    checkedIcon={<Favorite sx={{ color: "pink" }} />}
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <ListItemText
                    primary={task.text}
                    sx={{
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed
                        ? "#A0A0A0"
                        : theme === "dark"
                        ? Colors.white
                        : Colors.black,
                      fontSize: "16px",
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <Box
              display="flex"
              justifyContent="space-between"
              padding={1}
              color="#777A92"
            >
              <Typography variant="body2">
                {" "}
                {itemsLeft} {t("itemsLeft")}
              </Typography>
              <Box display="flex" gap={2}>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontWeight: filter === "all" ? "bold" : "normal",
                  }}
                  onClick={() => setFilter("all")}
                >
                  {t("all")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontWeight: filter === "active" ? "bold" : "normal",
                  }}
                  onClick={() => setFilter("active")}
                >
                  {t("active")}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontWeight: filter === "completed" ? "bold" : "normal",
                  }}
                  onClick={() => setFilter("completed")}
                >
                  {t("completed")}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer" }}
                onClick={clearCompleted}
              >
                {t("clearCompleted")}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";

import Todo from "../../assents/img/bg-desktop-dark.jpg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.context";
import { Colors } from "../../util/colors";
import { BoxCentralizado } from "../components/BoxCentralizado";

export const ToDoList = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box display="flex" flexDirection="column">
      <Box
        sx={{
          backgroundImage: `url(${Todo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: Colors.white,
            zIndex: 1,
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            To-Do List
          </Typography>
          <Typography variant="h6">
            Add your tasks and organize your day!
          </Typography>
        </Box>
      </Box>
      <BoxCentralizado>
        <Box>
          <Typography variant="body1">Construção</Typography>
        </Box>
      </BoxCentralizado>
    </Box>
  );
};

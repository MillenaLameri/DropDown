import { Box, Container, Switch, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useContext } from "react";
import { Colors } from "../../../util/colors";
import Logo from "../../../assents/img/logo.svg";
import LogoWhite from "../../../assents/img/logoWhite.svg";
import TodoIcon from "../../../assents/img/icon-todo.svg";
import Calendar from "../../../assents/img/icon-calendar.svg";
import Reminders from "../../../assents/img/icon-reminders.svg";
import Planing from "../../../assents/img/icon-planning.svg";
import { DropdownMenu } from "./DropDownMenu";

import { ThemeContext } from "../../contexts/theme.context";
import { Hamburguer } from "./Hamburguer";

const featureMenuItems = [
  { label: "To do List", icon: TodoIcon },
  { label: "Calendar", icon: Calendar },
  { label: "Reminders", icon: Reminders },
  { label: "Planning", icon: Planing },
];

const companyMenuItems = [
  { label: "History" },
  { label: "Our Team" },
  { label: "Blog" },
];

export const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  const [open, setOpen] = useState(false);

  const closeHambuguer = () => {
    setOpen(false);
  };
  const openHamburguer = () => {
    setOpen(true);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <img src={theme === "dark" ? LogoWhite : Logo} alt="Logo" />
        <Box display={{ xs: "none", md: "flex" }}>
          <Box ml={2}>
            <DropdownMenu label="Feature" menuItems={featureMenuItems} />
          </Box>
          <Box ml={2}>
            <DropdownMenu label="Company" menuItems={companyMenuItems} />
          </Box>
          <Box>
            <Box sx={{ my: 2 }}>
              <Typography
                noWrap
                component="a"
                href="/login"
                color={theme === "dark" ? Colors.white : Colors.gray3}
                fontWeight="bold"
                fontSize="0.9rem"
                ml={1}
                sx={{
                  my: 2,
                  backgroundColor: "transparent",
                  p: 1,
                  textAlign: "center",
                  textDecoration: "none",
                  "&:hover": {
                    borderColor: Colors.gray3,
                  },
                }}
              >
                Careers
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ my: 2 }}>
              <Typography
                noWrap
                component="a"
                href="/login"
                color={theme === "dark" ? Colors.white : Colors.gray3}
                fontWeight="bold"
                fontSize="0.9rem"
                ml={1}
                sx={{
                  my: 2,
                  backgroundColor: "transparent",
                  p: 1,
                  textAlign: "center",
                  textDecoration: "none",
                  "&:hover": {
                    borderColor: Colors.gray3,
                  },
                }}
              >
                About
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box alignItems="center" justifyContent="center" flexGrow="1"></Box>

        <Switch
          checked={theme === "dark"}
          onChange={handleThemeChange}
          color="default"
          sx={{
            "& .MuiSwitch-track": {
              backgroundColor: theme === "dark" ? Colors.white : Colors.gray3, // Cor do fundo
            },
            "& .MuiSwitch-thumb": {
              backgroundColor: theme === "dark" ? Colors.white : Colors.black2, // Cor da bolinha
            },
          }}
        />

        <Box ml={2} display={{ xs: "none", md: "flex" }}>
          <Typography
            noWrap
            component="a"
            href="/login"
            fontWeight="bold"
            color={theme === "dark" ? Colors.white : Colors.gray3}
            fontSize="0.8rem"
            mr={3}
            sx={{
              my: 2,
              backgroundColor: "transparent",
              p: 1,
              textAlign: "center",
              textDecoration: "none",
              "&:hover": {
                borderColor: Colors.gray3,
              },
            }}
          >
            Login
          </Typography>
          <Typography
            noWrap
            component="a"
            href="/login"
            fontWeight="bold"
            color={theme === "dark" ? Colors.white : Colors.gray3}
            fontSize="0.8rem"
            sx={{
              my: 2,
              backgroundColor: "transparent",
              borderRadius: 3,
              border: `1px solid ${Colors.gray3}`,
              p: 1,
              width: "auto",
              minWidth: "5rem",
              textAlign: "center",
              textDecoration: "none",
              "&:hover": {
                borderColor: Colors.gray3,
              },
            }}
          >
            Register
          </Typography>
        </Box>
        <Box>
          <IconButton
            edge="end"
            color="inherit"
            onClick={openHamburguer}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                xl: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Hamburguer open={open} close={closeHambuguer} />
      </Toolbar>
    </Container>
  );
};

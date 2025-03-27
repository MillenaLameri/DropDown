import { Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";

import { ThemeContext } from "../../contexts/theme.context";

import { DropdownMenu } from "./DropDownMenu";
import { Hamburguer } from "./Hamburguer";
import { LogoComponent } from "../LogoComponent";
import { MenuLink } from "../MenuLink";
import { ThemeToggle } from "../ThemeToggle";
import { Colors } from "../../../util/colors";
import MenuIcon from "@mui/icons-material/Menu";

// Menu items
const featureMenuItems = [
  { label: "To do List", icon: "", href: "/toDoList" },
  { label: "Calendar", icon: "", href: "/calendar" },
  { label: "Reminders", icon: "", href: "/reminders" },
  { label: "Planning", icon: "", href: "/planning" },
];

const companyMenuItems = [
  { label: "History", href: "/history" },
  { label: "Our Team", href: "/our-team" },
  { label: "Blog", href: "/blog" },
];

export const NavBar = () => {
  const { theme } = useContext(ThemeContext);
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
        <LogoComponent />

        <Box display={{ xs: "none", md: "flex" }}>
          <Box ml={2}>
            <DropdownMenu label="Feature" menuItems={featureMenuItems} />
          </Box>
          <Box ml={2}>
            <DropdownMenu label="Company" menuItems={companyMenuItems} />
          </Box>

          <MenuLink label="Careers" href="/careers" />
          <MenuLink label="About" href="/about" />
        </Box>

        <Box alignItems="center" justifyContent="center" flexGrow="1"></Box>

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
        <ThemeToggle />
      </Toolbar>
    </Container>
  );
};

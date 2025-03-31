import { Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";

import { ThemeContext } from "../../contexts/theme.context";
import TodoIcon from "../../../assents/img/icon-todo.svg";
import Calendar from "../../../assents/img/icon-calendar.svg";
import Reminders from "../../../assents/img/icon-reminders.svg";
import Planing from "../../../assents/img/icon-planning.svg";
import { DropdownMenu } from "./DropDownMenu";
import { Hamburguer } from "./Hamburguer";
import { LogoComponent } from "../LogoComponent";
import { MenuLink } from "../MenuLink";
import { ThemeToggle } from "../ThemeToggle";
import { Colors } from "../../../util/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const featureMenuItems = [
    { label: t("to_do_list"), icon: TodoIcon, href: "/toDoList" },
    { label: t("calendar"), icon: Calendar, href: "/calendar" },
    { label: t("reminders"), icon: Reminders, href: "/reminders" },
    { label: t("planning"), icon: Planing, href: "/planning" },
  ];

  const companyMenuItems = [
    { label: t("history"), href: "/history" },
    { label: t("our_team"), href: "/our-team" },
    { label: t("blog"), href: "/blog" },
  ];

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
            <DropdownMenu label={t("feature")} menuItems={featureMenuItems} />
          </Box>
          <Box ml={2}>
            <DropdownMenu label={t("company")} menuItems={companyMenuItems} />
          </Box>

          <MenuLink label={t("careers")} href="/careers" />
          <MenuLink label={t("about")} href="/about" />
        </Box>

        <Box alignItems="center" justifyContent="center" flexGrow="1"></Box>
        <ThemeToggle />
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
            {t("login")}
          </Typography>
          <Typography
            noWrap
            component="a"
            href="/register"
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
            {t("register")}
          </Typography>
        </Box>
        <LanguageSelector />
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

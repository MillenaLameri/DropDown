import { Box } from "@mui/material";
import MoonIcon from "../../assents/img/moon.svg";
import SunIcon from "../../assents/img/icon-sun.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.context";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
  };

  return (
    <Box onClick={handleThemeChange} ml={2} sx={{ cursor: "pointer" }}>
      <img
        src={theme === "dark" ? SunIcon : MoonIcon}
        alt="theme-toggle"
        width={26}
        height={25}
      />
    </Box>
  );
};

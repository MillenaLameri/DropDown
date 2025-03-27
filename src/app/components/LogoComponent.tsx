import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import Logo from "../../assents/img/logo.svg";
import LogoWhite from "../../assents/img/logoWhite.svg";
import { ThemeContext } from "../contexts/theme.context";
import { Box } from "@mui/material";

export const LogoComponent = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Box onClick={handleLogoClick} display={"flex"} sx={{ cursor: "pointer" }}>
      <img src={theme === "dark" ? LogoWhite : Logo} alt="Logo" />
    </Box>
  );
};

import { Box } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";
import { useState, useEffect } from "react";
import { ThemeContext } from "./app/contexts/theme.context";
import Layout from "./util/layout/Layout";
import "./App.css";
import { NavBar } from "./app/components/Header/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

export const App = () => {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: light)").matches;

  const getDefaultTheme = (): string => {
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Box display="flex" flexDirection="column" flex={1}>
          <Layout>
            <div className={`App ${theme}`}>
              <NavBar />
              <AppRoutes />
            </div>
          </Layout>
        </Box>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

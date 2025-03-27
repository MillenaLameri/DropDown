import { Box } from "@mui/material";
import { AppRoutes } from "./routes/AppRoutes";
import { useState } from "react";

import { ThemeContext } from "./app/contexts/theme.context";
import Layout from "./util/layout/Layout";
import "./App.css";

export const App = () => {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getDefaultTheme = (): string => {
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box display="flex" flexDirection="column" flex={1}>
        <Layout>
          <div className={`App ${theme}`}>
            <AppRoutes />
          </div>
        </Layout>
      </Box>
    </ThemeContext.Provider>
  );
};

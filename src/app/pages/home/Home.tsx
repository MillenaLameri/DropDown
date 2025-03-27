import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import { BoxCentralizado } from "../../components/BoxCentralizado";
import { HeroSection } from "./components/HeroSection";
import { LearnMoreButton } from "./components/LearnMoreButton";
import { ClientLogos } from "./components/ClientLogos";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box display="flex" flexDirection="column">
      <Grid container height="100vh">
        <BoxCentralizado>
          <Box maxWidth="sm">
            <HeroSection theme={theme} />
            <LearnMoreButton theme={theme} />
            <ClientLogos />
          </Box>
        </BoxCentralizado>

        {/* Hero image for desktop view */}
        <Grid
          item
          mt={5}
          xs={12}
          sm={6}
          md={5}
          sx={{
            backgroundImage: `url(${require("../../../assents/img/hero.png")})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            display: { xs: "none", sm: "none", md: "block", xl: "block" },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

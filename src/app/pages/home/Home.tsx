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
      <Grid
        item
        mt={5}
        xs={12}
        sm={6}
        md={5}
        sx={{
          backgroundImage: `url(${require("../../../assents/img/hero-mobile.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: { xs: "40vh", sm: "60vh" },
          display: { xs: "block", sm: "block", md: "none", xl: "none" },
        }}
      ></Grid>
      <Grid container height={{ md: "100vh", mt: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          display={{ md: "flex", mt: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <BoxCentralizado>
            <Box maxWidth="sm">
              <HeroSection theme={theme} />
              <LearnMoreButton theme={theme} />
              <ClientLogos />
            </Box>
          </BoxCentralizado>
        </Grid>

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

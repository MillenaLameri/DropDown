import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Colors } from "../../../util/colors";
import { BoxCentralizado } from "../../components/BoxCentralizado";
import Hero from "../../../assents/img/hero.png";
import AudioPhile from "../../../assents/img/client-audiophile.svg";
import DataBiz from "../../../assents/img/client-databiz.svg";
import Maker from "../../../assents/img/client-maker.svg";
import Meet from "../../../assents/img/client-meet.svg";
import { NavBar } from "../../components/Header/NavBar";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme.context";

const styles = {
  image: {
    backgroundImage: `url(${Hero})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};
export const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Box display="flex" flexDirection="column">
      <NavBar />
      <Grid container height="100vh">
        <BoxCentralizado>
          <Box
            display={{
              xs: "block",
              sm: "block",
              md: "none",
              xl: "none",
            }}
            ml={4}
          ></Box>
          <Box maxWidth="sm">
            <Box>
              <Typography variant="h1" fontWeight="bold">
                Make
              </Typography>
              <Typography variant="h1" fontWeight="bold">
                remote work
              </Typography>
              <Box>
                <Typography fontSize="18" mt={8}>
                  Get your team in sync, no matter your location. Streamline
                  processes, create team rituals, and watch productivity soar.
                </Typography>
              </Box>
              <Box mt={10}>
                <Typography
                  noWrap
                  component="a"
                  href="/login"
                  color={theme === "dark" ? Colors.black : Colors.white}
                  fontSize="18"
                  sx={{
                    my: 2,
                    backgroundColor:
                      theme === "dark" ? Colors.white : Colors.black,
                    borderRadius: 3,
                    p: 2,
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Learn More
                </Typography>
              </Box>
              <Box mt={16} display="flex" flexDirection="row">
                <Box mr={2}>
                  <img src={DataBiz} />
                </Box>
                <Box mr={2}>
                  <img src={AudioPhile} />
                </Box>
                <Box mr={2}>
                  <img src={Maker} />
                </Box>
                <Box mr={2}>
                  <img src={Meet} />
                </Box>
              </Box>
            </Box>
          </Box>
        </BoxCentralizado>
        <Grid
          item
          mt={5}
          xs={12}
          sm={6}
          md={5}
          sx={{
            ...styles.image,
            height: "80vh",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
            },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

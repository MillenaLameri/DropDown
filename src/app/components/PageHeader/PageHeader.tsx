import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Hamburguer } from "./Hamburguer";
import { Colors } from "../../../util/colors";
import Logo from "../../../assents/img/logo.svg";

export const PageHeader = () => {
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
        <img src={Logo} />
        <Box display={{ xs: "none", md: "flex" }}>
          <Box ml={2}>
            <Button sx={{ my: 2 }}>
              <Typography
                ml={1}
                color={Colors.black}
                fontSize="0.8rem"
                fontWeight="bold"
              >
                Features
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2 }}>
              <Typography
                ml={1}
                fontWeight="bold"
                color={Colors.black}
                fontSize="0.8rem"
              >
                Company
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2 }}>
              <Typography
                fontWeight="bold"
                color={Colors.black}
                fontSize="0.8rem"
                ml={1}
              >
                Careers
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2 }}>
              <Typography
                fontWeight="bold"
                color={Colors.black}
                fontSize="0.8rem"
                ml={1}
              >
                About
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box alignItems="center" justifyContent="center" flexGrow="1"></Box>

        <Box ml={2} display={{ xs: "none", md: "flex" }}>
          <Typography
            noWrap
            component="a"
            href="/login"
            fontWeight="bold"
            color={Colors.gray3}
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
            color={Colors.gray3}
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

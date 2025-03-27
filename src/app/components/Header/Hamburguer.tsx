import { Box, Button, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Colors } from "../../../util/colors";
import { ThemeContext } from "../../contexts/theme.context";
import { useContext } from "react";

type Props = {
  open: boolean;
  close: () => void;
};

export const Hamburguer = ({ open, close }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Drawer
      anchor="right"
      PaperProps={{
        sx: { width: "100%" },
      }}
      onClose={close}
      open={open}
    >
      <Box
        sx={{
          p: 2,
          height: 1,
          backgroundColor: theme === "dark" ? Colors.black : Colors.white,
        }}
      >
        <Box
          justifyContent="flex-end"
          flexDirection="row"
          display="flex"
          ml={4}
        >
          <CloseIcon onClick={close} />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ mb: 2 }}>
          <ListItemButton>
            <ListItemText
              primary="Features"
              sx={{
                textDecoration: "none",
                color: theme === "dark" ? Colors.white : Colors.gray3,
              }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Company"
              sx={{
                textDecoration: "none",
                color: theme === "dark" ? Colors.white : Colors.gray3,
              }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Careers"
              sx={{
                textDecoration: "none",
                color: theme === "dark" ? Colors.white : Colors.gray3,
              }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="About"
              sx={{
                textDecoration: "none",
                color: theme === "dark" ? Colors.white : Colors.gray3,
              }}
            />
          </ListItemButton>
        </Box>
        <Box
          justifyContent="center"
          display="flex"
          position="absolute"
          bottom={0}
          sx={{
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <Button
            variant="contained"
            sx={{ m: 1, width: "10rem", backgroundColor: Colors.black }}
          >
            <Typography
              noWrap
              component="a"
              href="/login"
              sx={{
                textDecoration: "none",
                color: theme === "dark" ? Colors.white : Colors.gray3,
              }}
            >
              Register
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              m: 1,
              width: "10rem",
              borderColor: Colors.black,
              color: Colors.black,
            }}
          >
            <Typography
              noWrap
              component="a"
              href="/login"
              sx={{
                textDecoration: "none",
                color: Colors.black,
              }}
            >
              Login
            </Typography>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

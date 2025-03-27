import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../contexts/theme.context";
import { Colors } from "../../util/colors";
import { useContext } from "react";

interface MenuLinkProps {
  label: string;
  href: string;
}

export const MenuLink = ({ label, href }: MenuLinkProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box sx={{ my: 2 }}>
      <Typography
        noWrap
        component="a"
        href={href}
        color={theme === "dark" ? Colors.white : Colors.gray3}
        fontWeight="bold"
        fontSize="0.9rem"
        ml={1}
        sx={{
          backgroundColor: "transparent",
          p: 1,
          textAlign: "center",
          textDecoration: "none",
          "&:hover": {
            borderColor: Colors.gray3,
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

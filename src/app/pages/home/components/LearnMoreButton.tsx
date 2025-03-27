import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../util/colors";

interface LearnMoreButtonProps {
  theme: string;
}

export const LearnMoreButton = ({ theme }: LearnMoreButtonProps) => (
  <Box mt={10}>
    <Typography
      noWrap
      component="a"
      href="/login"
      color={theme === "dark" ? Colors.black : Colors.white}
      fontSize="18"
      sx={{
        my: 2,
        backgroundColor: theme === "dark" ? Colors.white : Colors.black,
        borderRadius: 3,
        p: 2,
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      Learn More
    </Typography>
  </Box>
);

import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../util/colors";

interface LearnMoreButtonProps {
  theme: string;
}

export const LearnMoreButton = ({ theme }: LearnMoreButtonProps) => (
  <Box
    display="flex"
    alignContent={{ xs: "center", sm: "center", md: "left", mt: "left" }}
    alignItems={{ xs: "center", sm: "center", md: "left", mt: "left" }}
    justifyItems={{ xs: "center", sm: "center", md: "left", mt: "left" }}
    justifyContent={{ xs: "center", sm: "center", md: "left", mt: "left" }}
    mt={{ xs: 3, sm: 4, mt: 10, md: 10 }}
  >
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
        width: 120,
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      Learn More
    </Typography>
  </Box>
);

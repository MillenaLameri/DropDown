import { Box, Typography } from "@mui/material";

interface HeroSectionProps {
  theme: string;
}

export const HeroSection = ({ theme }: HeroSectionProps) => (
  <Box maxWidth="sm">
    <Box>
      <Typography
        variant="h1"
        fontWeight="bold"
        fontSize={{ xs: "3rem", sm: "3rem", md: "5rem" }}
      >
        Make
      </Typography>
      <Typography
        variant="h1"
        fontWeight="bold"
        fontSize={{ xs: "3rem", sm: "3rem", md: "5rem" }}
      >
        remote work
      </Typography>
      <Box>
        <Typography
          fontSize="18"
          mt={8}
          sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
        >
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </Typography>
      </Box>
    </Box>
  </Box>
);

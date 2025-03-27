import { Box, Typography } from "@mui/material";

interface HeroSectionProps {
  theme: string;
}

export const HeroSection = ({ theme }: HeroSectionProps) => (
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
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </Typography>
      </Box>
    </Box>
  </Box>
);

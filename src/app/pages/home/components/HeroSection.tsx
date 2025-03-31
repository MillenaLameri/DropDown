import { Box, Typography } from "@mui/material";
import { Colors } from "../../../../util/colors";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
  theme: string;
}

export const HeroSection = ({ theme }: HeroSectionProps) => {
  const { t } = useTranslation();

  return (
    <Box mt={{ xs: 4, sm: 4 }}>
      <Box>
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize={{ xs: "2rem", sm: "2rem" }}
          sx={{
            display: { xs: "block", sm: "block", md: "none", xl: "none" },
            textAlign: { xs: "center", sm: "center" },
          }}
        >
          {t("welcome")}
        </Typography>
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize={{ xs: "3rem", sm: "3rem", md: "5rem" }}
          sx={{ display: { xs: "none", sm: "none", md: "block", xl: "block" } }}
        >
          {t("welcome1")}
        </Typography>
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize={{ xs: "3rem", sm: "3rem", md: "5rem" }}
          sx={{ display: { xs: "none", sm: "none", md: "block", xl: "block" } }}
        >
          {t("welcome2")}
        </Typography>
        <Box>
          <Typography
            fontSize="18"
            mt={{ xs: 2, sm: 4, mt: 8, md: 8 }}
            color={theme === "dark" ? Colors.white : Colors.gray2}
            sx={{
              fontSize: { xs: "18px", sm: "16px", md: "18px" },
              textAlign: { xs: "center", sm: "center", md: "left" },
            }}
          >
            {t("description")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

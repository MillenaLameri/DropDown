import { Box, Button, Divider, Typography } from "@mui/material";
import { useContext } from "react";

import { useTranslation } from "react-i18next";

import GoogleWhite from "../../../../assents/img/social/google-white-icon.svg";
import GoogleBlack from "../../../../assents/img/social/google-black-icon.svg";
import FacebookWhite from "../../../../assents/img/social/facebook-app-round-white-icon.svg";
import FacebookBlack from "../../../../assents/img/social/facebook-app-round-icon.svg";
import { AuthTextField } from "./AuthTextField";
import { SocialLoginButton } from "./SocialLoginButton";
import { ThemeContext } from "../../../contexts/theme.context";
import { Colors } from "../../../../util/colors";

interface Props {
  isRegister?: boolean;
}

export const AuthForm = ({ isRegister = false }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const isDarkTheme = theme === "dark";

  return (
    <Box maxWidth="400px" width="100%">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            ml: "left",
          },
        }}
        color={theme === "dark" ? Colors.white : Colors.black}
      >
        {t("loginWelcome")}
      </Typography>
      <Typography
        color={theme === "dark" ? Colors.white : Colors.black}
        variant="h6"
        mt={1}
        mb={3}
        sx={{
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            ml: "left",
          },
        }}
      >
        {t("loginWelcome2")}
      </Typography>
      <Typography
        fontWeight="bold"
        color={theme === "dark" ? Colors.white : Colors.black}
        variant="body1"
        mt={1}
      >
        Email
      </Typography>
      <AuthTextField placeholder="exemple@example.com" />
      <Typography
        fontWeight="bold"
        color={theme === "dark" ? Colors.white : Colors.black}
        variant="body1"
        mt={1}
      >
        {t("password")}
      </Typography>
      <AuthTextField placeholder="***********" type="password" />
      {isRegister && (
        <Box>
          <Typography
            fontWeight="bold"
            color={theme === "dark" ? Colors.white : Colors.black}
            variant="body1"
            mt={1}
          >
            {t("confirmPassword")}
          </Typography>
          <AuthTextField placeholder="***********" type="password" />
        </Box>
      )}
      <Box mt={4}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: 10,
            minHeight: "56px",
            backgroundColor: theme === "dark" ? Colors.white : Colors.black,
            "&:hover": { backgroundColor: Colors.gray2, boxShadow: "none" },
          }}
        >
          <Typography
            color={theme === "dark" ? Colors.black : Colors.white}
            variant="button"
          >
            {isRegister ? t("register") : t("signin")}
          </Typography>
        </Button>
      </Box>
      {!isRegister && (
        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <Typography
            fontWeight="bold"
            color={theme === "dark" ? Colors.white : Colors.gray2}
            variant="body2"
            mb={1}
          >
            {t("forgotPassword")}
          </Typography>
        </Box>
      )}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 2 }}>
        <Divider sx={{ flexGrow: 1, backgroundColor: Colors.gray2 }} />
        <Typography
          sx={{
            mx: 2,
            color: theme === "dark" ? Colors.white : Colors.gray2,
          }}
          fontWeight="bold"
          variant="body1"
        >
          {t("or")}
        </Typography>
        <Divider sx={{ flexGrow: 1, backgroundColor: Colors.gray2 }} />
      </Box>
      <Typography
        color={isDarkTheme ? "white" : "black"}
        variant="body1"
        textAlign="center"
      >
        {t("socialMedia")}
      </Typography>
      <Box mt={3} display="flex" flexDirection="column" alignItems="center">
        <SocialLoginButton
          icon={isDarkTheme ? GoogleBlack : GoogleWhite}
          label="Google"
          isDarkTheme={isDarkTheme}
        />
        <SocialLoginButton
          icon={isDarkTheme ? FacebookBlack : FacebookWhite}
          label="Facebook"
          isDarkTheme={isDarkTheme}
        />
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            fontWeight="bold"
            color={theme === "dark" ? Colors.white : Colors.gray2}
            variant="body2"
            mr={1}
          >
            {t("new")}
          </Typography>
          <Typography
            fontWeight="bold"
            color={theme === "dark" ? Colors.white : Colors.gray2}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            {t("newAccount")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

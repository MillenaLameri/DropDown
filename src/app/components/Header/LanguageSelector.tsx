import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Us from "../../../assents/img/us.svg";
import Br from "../../../assents/img/br.svg";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <Box
        ml={2}
        onClick={() => changeLanguage("en")}
        sx={{ cursor: "pointer" }}
      >
        <img
          src={Us}
          alt="US Flag"
          style={{
            width: "30px",
            height: "auto",
          }}
        />
      </Box>
      <Box onClick={() => changeLanguage("pt")} sx={{ cursor: "pointer" }}>
        <img
          src={Br}
          alt="Brazil Flag"
          style={{
            width: "30px",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

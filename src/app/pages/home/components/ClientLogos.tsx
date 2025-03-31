import { Box } from "@mui/material";
import AudioPhile from "../../../../assents/img/client-audiophile.svg";
import DataBiz from "../../../../assents/img/client-databiz.svg";
import Maker from "../../../../assents/img/client-maker.svg";
import Meet from "../../../../assents/img/client-meet.svg";

export const ClientLogos = () => (
  <Box
    mt={{ xs: 4, sm: 4, mt: 10, md: 10 }}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box mr={2}>
      <img
        src={DataBiz}
        alt="DataBiz"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "5rem",
        }}
      />
    </Box>
    <Box mr={2}>
      <img
        src={AudioPhile}
        alt="AudioPhile"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "5rem",
        }}
      />
    </Box>
    <Box mr={2}>
      <img
        src={Meet}
        alt="Meet"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "5rem",
        }}
      />
    </Box>
    <Box mr={2}>
      <img
        src={Maker}
        alt="Maker"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "5rem",
        }}
      />
    </Box>
  </Box>
);

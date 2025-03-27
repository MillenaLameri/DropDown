import { Box } from "@mui/material";
import AudioPhile from "../../../../assents/img/client-audiophile.svg";
import DataBiz from "../../../../assents/img/client-databiz.svg";
import Maker from "../../../../assents/img/client-maker.svg";
import Meet from "../../../../assents/img/client-meet.svg";

export const ClientLogos = () => (
  <Box mt={16} display="flex" flexDirection="row">
    <Box mr={2}>
      <img src={DataBiz} alt="DataBiz" />
    </Box>
    <Box mr={2}>
      <img src={AudioPhile} alt="AudioPhile" />
    </Box>
    <Box mr={2}>
      <img src={Maker} alt="Maker" />
    </Box>
    <Box mr={2}>
      <img src={Meet} alt="Meet" />
    </Box>
  </Box>
);

import { Button, Box, Typography } from "@mui/material";
import { Colors } from "../../../../util/colors";

interface Props {
  icon: string;
  label: string;
  isDarkTheme: boolean;
}

export const SocialLoginButton = ({ icon, label, isDarkTheme }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 10,
        minHeight: "56px",
        width: "80%",
        backgroundColor: isDarkTheme ? Colors.white : Colors.black,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": { backgroundColor: Colors.gray2, boxShadow: "none" },
        mb: 2,
      }}
    >
      <Box mr={2} display="flex" alignItems="center">
        <img width="25" height="25" src={icon} alt={label} />
      </Box>
      <Typography
        color={isDarkTheme ? Colors.black : Colors.white}
        variant="button"
      >
        {label}
      </Typography>
    </Button>
  );
};

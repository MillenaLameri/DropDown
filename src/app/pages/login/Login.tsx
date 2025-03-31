import { Grid } from "@mui/material";
import { AuthForm } from "./components/AuthForm";

export const Login = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${require("../../../assents/img/hero.png")})`,
          backgroundSize: "cover",
          height: { xs: "20vh", md: "90vh" },
        }}
      />
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AuthForm />
      </Grid>
    </Grid>
  );
};

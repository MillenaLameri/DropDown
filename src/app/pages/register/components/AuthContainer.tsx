import { Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const AuthContainer = ({ children }: Props) => {
  return (
    <Grid container height="100vh">
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${require("../../../../assents/img/hero.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
        p={3}
      >
        {children}
      </Grid>
    </Grid>
  );
};

import * as React from "react";
import { envConfig } from "../config/config";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqBody = {
      firstName: data.get("first-name"),
      lastName: data.get("last-name"),
      email: data.get("email"),
      birthDate: data.get("date-birth"),
      password: data.get("password"),
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    };

    fetch(`${envConfig.URL}/users`, requestOptions).then((response) =>
      response.json()
    );

    event.target.reset();

    console.log(reqBody);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first-name"
                required
                fullWidth
                id="first-name"
                label="Prénom"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last-name"
                label="Nom"
                name="last-name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="date-birth"
                label="Date de Naissance"
                type="date"
                id="date-birth"
                autoComplete=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password-confirmed"
                label="Confirmer votre mot de passe"
                type="password"
                id="password-confirmed"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            S'INSCRIRE
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={'/login'} variant="body2">
                Vous avez déja un compte? Connectez-vous
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

import * as React from "react";
import { envConfig } from "../config/config";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqBody = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    };

    fetch(`${envConfig.URL}/users/login`, requestOptions).then((response) =>
      console.log(response.json())
    );
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
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            CONNEXION
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link className="login-link">
                Mot de passe oublié ?
              </Link> */}
            </Grid>
            <Grid item>
              <Link to={"/signup"} className='login-link'>
                {"Pas de compte ? Inscrivez-vous"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

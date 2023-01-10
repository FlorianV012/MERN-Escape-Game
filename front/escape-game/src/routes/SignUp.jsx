import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUp() {
  return (
    <div className="signup">
      <img src="" alt="" />
      <h2>Inscription</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Prenom"
            defaultValue=""
          />
         
          <TextField
            required
            id="outlined-required"
            label="Nom"
            defaultValue=""
          />
        </div>
      </Box>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "52ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            required
            label="Date de naissance"
            type="date"
            defaultValue="jj//mm/aaaa"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            required
            id="outlined-password-input"
            label="Mot de Passe"
            type="password"
            autoComplete="current-password"
          />

          <TextField
            required
            id="outlined-password-input"
            label="Confirmer Mot de Passe"
            type="password"
            autoComplete="current-password"
          />
        </div>
      </Box>

      <Box
        sx={{
          "& button": { m: 1, width: "58ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Button variant="contained">S'INSCRIRE</Button>
      </Box>
    </div>
  );
}

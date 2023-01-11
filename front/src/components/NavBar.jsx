import React from "react";
import EscapeGameLogo from "../assets/logo-escape.png";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <div className="logo-header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#695DC2" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to={"/"}>
                <img
                  style={{ height: "3rem", width: "auto" }}
                  src={EscapeGameLogo}
                />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Link className="navbar-link" to={"/login"}>
              <Button color="inherit">CONNEXION</Button>
            </Link>
            <Link className="navbar-link" to={"/signup"}>
              <Button color="inherit">INSCRIPTION</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

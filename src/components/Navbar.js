
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";

export default function Navbar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            // edge="start"
            // className={classes.menuButton}
            color="inherit"
            // aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Live Score
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
  );
}

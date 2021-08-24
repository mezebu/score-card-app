import React from "react";
// prettier-ignore
import { Container, IconButton, Typography, Toolbar, AppBar } from "@material-ui/core";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

import { useStyles } from "./styles";

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <SportsSoccerIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Ezeigwe's League
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;

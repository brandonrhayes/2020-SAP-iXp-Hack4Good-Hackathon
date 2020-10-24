import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import { AccountCircle } from '@material-ui/icons';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mindr
          </Typography>
          <Link to={'/'} className={classes.link}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to={'/log'} className={classes.link}>
            <Button color="inherit">Log</Button>
          </Link>
          <Link to={'/account'} className={classes.link}>
            <IconButton
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

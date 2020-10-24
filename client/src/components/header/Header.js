import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from '@material-ui/icons';
import { BrowserRouter as Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mindr
          </Typography>
          <Link to={"/home"}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to={"/home"}>
            <Button color="inherit">Log</Button>
          </Link>
          <IconButton
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  // const responseFacebook = (response) => {
  //   console.log(response);
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:9000/facebooklogin",
  //     data: {
  //       name: response.name,
  //       email: response.email,
  //     },
  //   }).then((response) => {
  //     console.log("Facebook login success", response);
  //   });
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mood From Home
          </Typography>
          <Link to={"/"} className={classes.link}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to={"/log"} className={classes.link}>
            <Button color="inherit">Log</Button>
          </Link>
          <Link to={"/reminders"} className={classes.link}>
            <Button color="inherit">Reminders</Button>
          </Link>
          <Link to={"/account"} className={classes.link}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Link>
          {/* <FacebookLogin
            appId="661278961420678"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
          /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

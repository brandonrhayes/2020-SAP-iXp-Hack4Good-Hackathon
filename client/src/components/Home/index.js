import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import home_img from "./homeimg.png";
import HeroUnit from "../HeroUnit";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  heading2: {
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
  },
}));

const pageData = {
  heading: "Mood From Home",
  subheading: "Your smart work-from-home assistant",
};

const Home = () => {
  const classes = useStyles();

  return (
    <div className="Home-main">
      <Box align="center">
        <HeroUnit data={pageData} />
        <div className="Home-image">
          <img src={home_img} alt="home image" maxWidth="565px" maxHeight="423px" />
        </div>
      </Box>
    </div>
  );
};

export default Home;

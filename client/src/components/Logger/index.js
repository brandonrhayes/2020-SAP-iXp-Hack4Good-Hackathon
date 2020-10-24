import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  heading2: {
    marginBottom: '20px',
  },
  link: {
    textDecoration: "none",
  },
}))


const Logger = () => {
  const classes = useStyles();

  return (
    <Box align='center'>
      <Typography variant='h2' className={classes.heading}>
        Your mood
      </Typography>
      <Typography variant='h4' className={classes.heading2}>
        How would you like to log your mood?
      </Typography>
      <Link to={"/photo-log"} className={classes.link}>
        <Button>Take a picture of myself</Button>
      </Link>
      <Link to={"/manual-log"} className={classes.link}>
        <Button>Manually enter a score</Button>
      </Link>
    </Box>
  );
}

export default Logger;

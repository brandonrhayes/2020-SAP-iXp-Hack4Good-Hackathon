import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import home_img from './homeimg.png';

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


const Home = () => {
  const classes = useStyles();

  return (
    <div className='Home-main'>
      <div className='Home-image'>
        <img src={home_img} alt='home image' width="50%" height="50%" />
      </div>
      <Box align='center'>
        <Typography variant='h4' className={classes.heading}>
          Welcome to Mindr - your smart work-from-home assistant.
        </Typography>
      </Box>
    </div>
  );
}

export default Home;

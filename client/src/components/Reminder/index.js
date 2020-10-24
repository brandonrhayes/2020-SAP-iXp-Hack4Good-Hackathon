import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroUnit from '../HeroUnit';

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

const pageData = {
  heading: 'Reminders',
  subheading: 'Your reminders for a healthy work-from-home environment'
};


const Reminder = () => {
  const classes = useStyles();

  return (
    <>
      <HeroUnit data={pageData} />
      <Box align='center'>
        <div> connnect to alexa </div>
      </Box>
    </>
  );
}

export default Reminder;

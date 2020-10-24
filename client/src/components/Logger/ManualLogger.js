import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  heading2: {
    marginBottom: '20px',
  },
}))


const ManualLogger = () => {
  const classes = useStyles();

  return (
    <Box align='center'>
      <Typography variant='h4' className={classes.heading2}>
        How would you rate your mood right now? (1=bad, 5=good)
      </Typography>
      <div>
        NEED TO IMPLEMENT SCALE HERE
      </div>
    </Box>
  );
}

export default ManualLogger;

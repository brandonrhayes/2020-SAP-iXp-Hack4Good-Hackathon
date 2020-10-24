import React from 'react';
import { Typography } from '@material-ui/core';

const Logger = () => {
  return (
    <div>
      <Typography variant='h2' align='center'>
        Your mood
      </Typography>
      <Typography variant='h4' align='center'>
        How would you like to log your mood?
      </Typography>
    </div>
  );
}

export default Logger;

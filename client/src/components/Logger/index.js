import React from 'react';
import { Typography, Button, Box, Grid, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import HeroUnit from '../HeroUnit';
import ManualLogger from './ManualLogger';

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
  heading: 'Mood Log',
  subheading: 'How would you like to log your mood?'
};



const Logger = () => {
  const classes = useStyles();
  const [manualOpen, setManualOpen] = React.useState(false);

  const handleClickOpenManual = () => {
    setManualOpen(true);
  }

  const handleCloseManual = () => {
    setManualOpen(false);
  }

  return (
    <>
      <HeroUnit data={pageData} />
      <Box align='center'>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link to={"/photo-log"} className={classes.link}>
              <Button variant='contained'>Take a picture of myself</Button>
            </Link>
          </Grid>
          <Grid item>
            {/* <Link to={"/manual-log"} className={classes.link} onClick={handleClickOpenManual}> */}
              <Button variant='contained' onClick={handleClickOpenManual}>Manually enter a score</Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Box>
      <Dialog onClose={handleCloseManual} open={manualOpen}>
        <ManualLogger close={handleCloseManual} />
      </Dialog>
    </>
  );
}

export default Logger;

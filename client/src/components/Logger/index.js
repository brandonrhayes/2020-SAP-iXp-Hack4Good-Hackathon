import React from "react";
import { Typography, Button, Box, Grid, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeroUnit from "../HeroUnit";
import ManualLogger from "./ManualLogger";
import PhotoCapture from '../photo/PhotoCapture';

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
  heading: "Mood Log",
  subheading: "How would you like to log your mood?",
};

const Logger = () => {
  const classes = useStyles();
  const [manualOpen, setManualOpen] = React.useState(false);
  const [photoOpen, setPhotoOpen] = React.useState(false);

  const handleClickOpenManual = () => {
    setManualOpen(true);
  };

  const handleCloseManual = () => {
    setManualOpen(false);
  };

  const handleClickOpenPhoto = () => {
    setPhotoOpen(true);
  };

  const handleClosePhoto = () => {
    setPhotoOpen(false);
  };

  return (
    <>
      <HeroUnit data={pageData} />
      <Box align="center">
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" onClick={handleClickOpenPhoto}>
              Take a picture of myself
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleClickOpenManual}>
              Manually enter a score
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Dialog onClose={handleCloseManual} open={manualOpen}>
        <ManualLogger close={handleCloseManual} />
      </Dialog>
      <Dialog onClose={handleClosePhoto} open={photoOpen}>
        <PhotoCapture close={handleClosePhoto} />
      </Dialog>
    </>
  );
};

export default Logger;

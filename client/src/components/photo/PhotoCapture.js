import React from "react";
import { Typography, Button, DialogTitle, DialogActions, DialogContent, Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import Webcam from "react-webcam";

const videoConstraints = {
  width: { min: 480 },
  height: { min: 720 },
  aspectRatio: 0.6666666667,
};

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const PhotoCapture = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.close();
  }

  const handleSave = () => {
    // save to database
    props.close();
    
  }

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // send image to backend
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <DialogTitle>
        <Typography variant="h6">Log your mood via camera</Typography>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={1} align="center">
          <Grid item>
            <Webcam
              audio={false}
              height={480}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={320}
              videoConstraints={videoConstraints}
            />
            <Grid item>
              <Button onClick={capture}>Capture photo</Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSave} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </>
  );
};

export default PhotoCapture;

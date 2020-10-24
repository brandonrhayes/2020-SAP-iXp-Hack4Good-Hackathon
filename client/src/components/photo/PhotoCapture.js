import React from "react";
import { Typography, Button, DialogTitle, DialogActions, DialogContent, Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import Webcam from "react-webcam";
import axios from 'axios'

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
    const img64base = imageSrc.replace("data:image/jpeg;base64,", "");
    console.log(img64base);

    let body = {
      "requests":[
        {
          "image":{
            "content":img64base
          },
          "features":[
            {
              "type":"FACE_DETECTION",
              "maxResults":1
            }
          ]
        }
      ]
    }
    axios({
      method: "POST",
      url: "https://vision.googleapis.com/v1/images:annotate",
      data: body
    }).then((response) => {
      console.log("google api response", response);
    }).catch((err) => {
      console.log("error: ", err.message)
    });
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

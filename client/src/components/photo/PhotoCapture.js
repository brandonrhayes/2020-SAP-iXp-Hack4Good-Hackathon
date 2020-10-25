import React from "react";
import {
  Typography,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Webcam from "react-webcam";
import axios from "axios";

const API_KEY = `${process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS}`;

const videoConstraints = {
  width: { min: 480 },
  height: { min: 720 },
  aspectRatio: 0.6666666667,
};

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const PhotoCapture = (props) => {
  const classes = useStyles();
  const [image, setImage] = React.useState("");

  const handleClose = () => {
    props.close();
  };

  const handleSave = () => {
    const image64_to_send = image.replace("data:image/jpeg;base64,", "");

    let data = JSON.stringify({
      requests: [
        {
          image: {
            content: image64_to_send,
          },
          features: [
            {
              type: "FACE_DETECTION",
              maxResults: 1,
            },
          ],
        },
      ],
    });

    let url = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      let face_data = res.data.responses[0].faceAnnotations[0];
      console.log(face_data);
    })
    .catch((err) => {
      console.log(err);
    });

    props.close();
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
<<<<<<< HEAD
    setImage(imageSrc);
=======
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
>>>>>>> helen_v
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

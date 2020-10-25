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
import api from '../../axios';

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
  const [moodScore, setMoodScore] = React.useState(0);

  const handleClose = () => {
    props.close();
  };

  const handleSave = async () => {
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

    await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      let face_data = res.data.responses[0].faceAnnotations[0];
      return face_data;
    })
    .then((face_data) => {
      let joy = convertLikelihoodToNumber(face_data.joyLikelihood);
      let anger = convertLikelihoodToNumber(face_data.angerLikelihood);
      let sorrow = convertLikelihoodToNumber(face_data.sorrowLikelihood);
      let likelihoods = {joy: joy, anger: anger, sorrow: sorrow};
      if (likelihoods.joy <= 3 && likelihoods.anger <= 3 && likelihoods.sorrow <= 3) {
        let score = 3;
        setMoodScore(score);
      } else if (likelihoods.anger <= 2 || likelihoods.sorrow <= 2) {
        let score = likelihoods.joy;
        score = score === 0 ? 3 : score;
        console.log(score);
        setMoodScore(score);
      } else if (likelihoods.anger >=3 || likelihoods.sorrow >=3) {
        let score = likelihoods.anger >= likelihoods.sorrow ? likelihoods.anger : likelihoods.sorrow;
        score = score === 5 ? 4 : score;
        score = 5 - score;
        score = score === 0 ? 3 : score;
        console.log(score);
        setMoodScore(score);
      }
    })
    .then(() => {
      api.post('/users/score/5f94996c6b492e9d904d4ccc', 
      {params: {
        score: moodScore,
      }})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    });

    props.close();
  };

  const convertLikelihoodToNumber = (likelihood) => {
    if(likelihood === "UNKNOWN"){
      return 0;
    }
    else if(likelihood === "VERY_UNLIKELY"){
      return 1;
    }
    else if(likelihood === "UNLIKELY"){
      return 2;
    }
    else if(likelihood === "POSSIBLE"){
      return 3;
    }
    else if(likelihood === "LIKELY"){
      return 4;
    }
    else if(likelihood === "VERY_LIKELY"){
      return 5;
    }
  }
  
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
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

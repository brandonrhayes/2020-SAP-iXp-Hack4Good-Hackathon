var express = require('express');
var router = express.Router();

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const fileName = './angry-man.jpg';

router.get('/', async function(req, res, next) {
  const [result] = await client.faceDetection(fileName);
  const faces = result.faceAnnotations;
  const return_res = {
    "message": "GET /vision SUCCESS",
    "result": {
      "Joy": faces[0].joyLikelihood,
      "Anger": faces[0].angerLikelihood,
      "Sorrow": faces[0].sorrowLikelihood,
      "Surprise": faces[0].surpriseLikelihood,
    }
  }
  res.send(return_res);
});

module.exports = router;

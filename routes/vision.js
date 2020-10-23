var express = require('express');
var router = express.Router();

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = 'smile.jpg';


router.get('/', function(req, res, next) {
  const result = callVision();
  res.send(result);
});

async function callVision() {
  const [result] = await client.faceDetection(fileName);
  const faces = result.faceAnnotations;
  return faces;
}

module.exports = router;

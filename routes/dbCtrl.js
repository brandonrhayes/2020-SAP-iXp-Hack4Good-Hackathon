const { UnsupportedMediaType } = require('http-errors')
const { Body } = require('node-fetch')
const User = require('../models/user-model')

getUserData = async (req, res) => {
    await User.findOne({_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({
            success: true, 
            data: user})
    }).catch(err => console.log(err))
}

getScore = async (req, res) => {
    await User.findOne({_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({
            success: true, 
            data: user.moodScore})
    }).catch(err => console.log(err))
}

/**
 * helen's addscore
 */
// addScore = async (req, res) => {
//     const scoreSet = {score: req.body.score, date: Date.now()}
//     // User.findOneAndUpdate(
//     //     {_id: req.body.id},
//     //     {$push: [{moodScore: scoreSet}]},
//     //     function (error, success) {
//     //         if (error) {
//     //             return res.status(404).json({success: false, error: error})
//     //         } else {
//     //             return res.status(200).json({success: true})
//     //         }
//     //     });


//     User.findOne({_id: req.params.id}, (err, user) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `User not found` })
//         }

//         var updatedScores = user.moodScore.push(scoreSet)
//         // user.email = user.email
//         // user.score = updatedScores
//         console.log(user)

//         user.save().then(() => {
//             res.status(200).json({
//                 success: true,
//                 scores: user.moodScore
//             })
//         }).catch(error => {
//             res.status(404);
//         })
//     }).catch(err => console.log(err))
// }

/**
 * mandy's addscore
 */
addScore = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    const scoreSet = {score: req.body.params.score, date: Date.now()};
    var moodScoreArray = user.moodScore;
    moodScoreArray.push(scoreSet);
  
    user
      .save()
      .then(result => {
        console.log(result);
        res.setHeader('Content-Type', 'application/json');
        res.status(202).json({
          message: "EDIT user mood score success!",
          edittedUser: {
            moodScore: result.moodScore
          }
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }

module.exports = {
    // createUser,
    getUserData,
    getScore,
    addScore
}
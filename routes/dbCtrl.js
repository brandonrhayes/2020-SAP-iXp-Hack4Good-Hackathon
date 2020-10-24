const User = require('../models/user-model')

createUser = (req, res) => {
    const body = JSON.stringify(req.params.user)

    if (!body) {
      return res.status(400).json({
          success: false,
          error: 'No user id provided',
      })
    }
  
    const user = new User({username: body});
  
    user
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: user._id,
            message: 'User created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'User not created!',
        })
    })
}

getUser = async (req, res) => {
    await User.findOne({username: JSON.stringify(req.params.username)}, (err, user) => {
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

getMoodScore = async (req, res) => {
    const username = req.body.user;
    await User.findOne({username: JSON.stringify(username)}, (err, user) => {
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
            data: user.getMoodScore})
    }).catch(err => console.log(err))
}

addMoodScore = async (req, res) => {
    const username = JSON.stringify(req.body.user);
    const score = req.body.score;
    await User.findOne({username: JSON.stringify(username)}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        user.addMoodScore({})
        return res.status(200).json({
            success: true, 
            data: user.getMoodScore})
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    getUser,
    getMoodScore
}
const User = require('../models/user-model');
const fetch = require('node-fetch')

facebookLogin = async (req, res) => {
    console.log(req.body)
    const fbName = JSON.stringify(req.body.name)
    const fbEmail = JSON.stringify(req.body.email)
    await User.findOne({email: fbEmail}).exec((err, user) => {
        if(err) {
            return res.status(400).json({
                error: "Could not find user"
            })
        } else {
            if (user) {
                res.status(200).json({
                    existingUser: true,
                    name: user.name,
                    email: user.email,
                    id: user._id
                })
            }

            const newUser = new User({email: fbEmail, name: fbName});

            newUser
            .save()
            .then(() => {
                return res.status(201).json({
                    existingUser: false,
                    name: newUser.name,
                    email: newUser.email,
                    id: newUser._id
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'User not created!',
                })
            })
        }
    })

}

module.exports = {
    facebookLogin
}
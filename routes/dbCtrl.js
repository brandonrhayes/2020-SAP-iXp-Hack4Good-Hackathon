const User = require('./models/user-model')

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

module.exports = {
    createUser
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: {
            type: String, 
            unique: true,
            required: true
        },
        moodScore: [
            {
                score: { type: Number},
                date: {type: Date}
            }
        ]
    }
);

module.exports = mongoose.model('user', User)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        email: {
            type: String, 
            unique: true,
            required: false
        },
        name: {
            type: String,
            required: false
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
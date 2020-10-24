const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        email: {
            type: String, 
            unique: true,
            required: true
        },
        name: {
            type: String,
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
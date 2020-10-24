const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://hack4good2020:hack4good@cluster0.3vywr.mongodb.net/app_user', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
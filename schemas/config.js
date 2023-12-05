const mongoose = require('mongoose')
const Schema = mongoose.Schema

const config = new Schema({
    titleUsername: String,
    placeholderUsername: String,
    btnStartDialog: String,
    titleHome: String,
    msgBotWelcome: String,
    msgBotReply: String,
    placeholderHome: String,
    msgUserSend: String,
})

module.exports = mongoose.model('config_live_toolV3', config)
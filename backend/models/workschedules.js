const mongoose = require('mongoose')

const workschedulesSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobilephone: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    finishTime: {
        type: Date,
        required: false,
        default: null
    }
})

module.exports = mongoose.model('Workschedule', workschedulesSchema)
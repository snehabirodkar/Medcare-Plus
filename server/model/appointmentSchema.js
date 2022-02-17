const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true
    },
})

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

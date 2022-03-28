const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
    dname: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    prescriptions: {
        type: String,
        required: true,
    },
})

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;

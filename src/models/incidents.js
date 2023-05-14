const mongoose = require("mongoose");

const Shcema = mongoose.Schema;

const IncidentSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    severity: {
        type: String ,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }

});

module.exports = mongoose.model("Incident", IncidentSchema);
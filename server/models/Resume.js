const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    summary: {
        type: String
    },

    skills: [
        {
            type: String
        }
    ],

    education: [
        {
            type: String
        }
    ],

    experience: [
        {
            type: String
        }
    ],

    projects: [
        {
            type: String
        }
    ]
},
{
    timestamps: true
});

module.exports = mongoose.model("Resume", resumeSchema);
const { validateHeaderName } = require("http");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        birthdate: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        dateCreate:{
            type: Date,
            default: Date.now
        },
        dateModify:{
            type: Date,
            default: Date.now
        }
    }
);
module.exports = mongoose.model("User", userSchema);
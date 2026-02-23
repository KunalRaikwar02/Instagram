const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [ true, "User name already exists" ],
        required: [ "User name is required" ]   
    },

    email: {
        type: String,
        unique: [ true, "Email already exists" ],
        required: [ true, "Email is required" ]
    },

    password: {
        type: String,
        required: [ true, "Password is required" ]
    },

    bio: String,

    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/ddalfiwui/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel
const express = require("express")
const identifyUser = require("../middlewares/auth.middleware")
const followController = require("../controllers/follow.controller")

const userRouter = express.Router()

// Send Follow Request
userRouter.post("/follow/:username",identifyUser,followController.sendFollowRequest)

// Accept Follow Request
userRouter.put("/follow/accept/:followId",identifyUser,followController.acceptFollowRequest)

// Reject Follow Request
userRouter.put("/follow/reject/:followId",identifyUser,followController.rejectFollowRequest)

module.exports = userRouter
const express = require("express")
const identifyUser = require("../middlewares/auth.middleware")
const followController = require("../controllers/follow.controller")
const userController = require("../controllers/user.controller")

const userRouter = express.Router()

/* 
  @route POST /api/users/follow/:userid
  @dec follow a user
  @access private
*/

userRouter.post("/follow/:username",identifyUser, userController.followUserController)

/* 
  @route POST /api/users/unfollow/:userid
  @dec unfollow a user
  @access private
*/

userRouter.post("/unfollow/:username",identifyUser, userController.unfollowUserController)

// Send Follow Request
// userRouter.post("/follow/:username",identifyUser,followController.sendFollowRequest)

// Accept Follow Request
userRouter.put("/follow/accept/:followId",identifyUser,followController.acceptFollowRequest)

// Reject Follow Request
userRouter.put("/follow/reject/:followId",identifyUser,followController.rejectFollowRequest)

module.exports = userRouter
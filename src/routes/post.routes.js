const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")

/* 
    GET /api/posts/ [protected]
  - req.body = { caption,image-file }
*/

postRouter.post("/",upload.single("image"), identifyUser,postController.createPostController)

/*
   @routes GET /api/posts/ [protected]
   @desc Get all posts created by the user that the request comes from.
*/

postRouter.get("/", identifyUser, postController.getPostController)

/*
   @routes GET /api/posts/details/:postid
   @desc return an detail about specipic post with the id
*/ 

postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

/*
   @routes /api/posts/like/:postid 
   @desc like or unlike a post with the id
*/

postRouter.post("/like/:postId", identifyUser, postController.likePostController)

module.exports = postRouter
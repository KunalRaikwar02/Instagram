const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })

/* 
    GET /api/posts/ [protected]
  - req.body = { caption,image-file }
*/

postRouter.post("/",upload.single("image"), postController.createPostController)

/*
    GET /api/posts/ [protected]
*/

postRouter.get("/", postController.getPostController)

/*
    GET /api/posts/details/:postid
*/ 

postRouter.get("/details/:postId",postController.getPostDetailsController)

module.exports = postRouter
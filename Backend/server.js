require("dotenv").config()
const app = require("./src/app");
const connectToDatabase = require("./src/config/database")

// require("./src/models/user.model")
// require("./src/models/post.model") 
// require("./src/models/like.model")   
// require("./src/models/follow.model") jaruri nhi chatgpt ne bola tha

connectToDatabase()

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export async function getFeed(){
    const response = await api.get("/api/posts/feed")
    return response.data
}

export async function createPost(imagefile, caption){

    const formData = new FormData()

    formData.append("image", imagefile)
    formData.append("caption", caption)

    const response = await api.post("/api/posts", formData)

    return response.data
}

export async function likePost(postId){
    const response = await api.post("/api/posts/like/" + postId)
    return response.data
}

export async function unLikePost(postId) {
    const response = await api.post("/api/posts/unlike/" + postId)
    return response.data
}
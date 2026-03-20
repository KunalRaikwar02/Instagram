import React,{useEffect} from 'react'
import "../style/feed.scss"
import Post from '../conponents/Post'
import { usePost } from '../hook/usePost'
import Nav from '../../shared/components/Nav'

const Feed = () => {

    const { feed, handleGetFeed, loading, handleLike, handleUnLike } = usePost()

    useEffect(() => {
    handleGetFeed()
}, [])

    if(loading || !feed){
        return (<main><h1>Feed is loading...</h1></main>)
    }

    console.log(feed)



  return (
      <main className="feed-page">
        <Nav />
        <div className="feed">
            <div className="posts">
                {/* {feed.map(post=>{
                    return <Post user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnLike={handleUnLike}/>
                })} */}

                {feed.map(post => {
    // Add a unique key here (usually post._id from MongoDB)
    return <Post key={post._id} user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnLike={handleUnLike}/>
})}
            </div>
        </div>
    </main>
  )
}

export default Feed
import {
  getFeed,
  createPost,
  likePost,
  unLikePost,
} from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    setFeed(data.posts.reverse());
    setLoading(false);
  };

  const handleCreatePost = async (imagefile, caption) => {
    setLoading(true);
    const data = await createPost(imagefile, caption);
    setFeed([data.post, ...feed]);
    setLoading(false);
  };

  const handleLike = async (post) => {
  
    const data = await likePost(post);
    await handleGetFeed();
    
  };

  const handleUnLike = async (post) => {
    
    const data = await unLikePost(post);
    await handleGetFeed();
   
  };

  useEffect(() => {
    handleGetFeed();
  }, []);

  return {
    loading,
    post,
    feed,
    handleGetFeed,
    handleCreatePost,
    handleLike,
    handleUnLike,
  };
};

import Post from "./Post"
import { PostList as PostListData } from "../store/Post-list-store";
import { useContext, useEffect, useState } from "react";
import WellcomeMessage from "./WellcomeMessage";
import LoadingComponent from "./LoadingComponent";

const PostList = ()=>{

    // const postListObj = useContext(PostListData);
    // const  postListActual = postListObj.postList;
    // console.log(postListActual);
    // we can do it in short hand 
    // by destructuring

    const {postList , addInitialPosts} = useContext(PostListData);
    
    const[fetching , setFetching] = useState(false);    

    useEffect( ()  =>  {
        setFetching(true);

        let controller = new AbortController();
        const signal = controller.signal;

        fetch("https://dummyjson.com/posts" , { signal })
        .then((res) => res.json())
        .then((data) => { 
            addInitialPosts(data.posts);
            setFetching(false);
        });
       
    return ()=>{
        // controller.abort();
        
        
    }
    }, [] );

    
    
    return <>

{fetching && <LoadingComponent></LoadingComponent>}

    {!fetching && 
   ( (postList.length === 0) &&
    <WellcomeMessage></WellcomeMessage> ) 
    }

    {!fetching &&  postList.map(post => <Post key={post.id} post = {post} />)}
     
    </>
}

export default PostList;
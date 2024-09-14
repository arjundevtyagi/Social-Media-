import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => {},
    addInitialPosts: ()=>{},
    deletePost : () => {},
};

//NOTED :---the thing or objs which are passed in creat context are shows us in auto complete
export const PostList = createContext( DEFAULT_CONTEXT );


//note reducer fun is a pure fun so it is declared outside the postproviderlist function
const postListReducer = (currPostList , action)=>{
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter(post => post.id !== action.payload.postId);
       
    }else if(action.type === "ADD_INITIAL_POSTS"){
        
        let arr = action.payload.posts;

        newPostList = [...arr]
        
    }else if(action.type === "ADD_POST"){
        // if(action.payload.title === "" || action.payload.userId === ""){
        //     return newPostList;
        // }else{

            newPostList = [action.payload , ...currPostList];
        // }
    }

    return newPostList;
};

//it just a nornal react component
const PostListProvider = ({ children }) => {


    const [postList , dispachPostList] = useReducer(postListReducer , []);

    const addPost = (userId , postTitle , postBody , postReactions , hastagsArr)=> {
        dispachPostList({
            type: "ADD_POST",
            payload:   {
                id: Date.now(),
                title:  postTitle,
                body: postBody,
                userId: userId,
                reactions: postReactions,
                tags: hastagsArr,
            }
        })
        
    };

    const addInitialPosts = (posts)=> {
        
        dispachPostList({
            type: "ADD_INITIAL_POSTS",
            payload:   {
                 posts
            }
        })
        
    };

    const deletePost = (id)=> {
        
        dispachPostList({
            type: "DELETE_POST",
            payload:{
                postId : id,
            }
        })
        
    };

    return <PostList.Provider value = {
        { postList,addPost,addInitialPosts, deletePost}
    } >

        {children}
    </PostList.Provider>
}
   


// let allDefaultPost = fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(data => data.posts);
// const DEFAULT_POST_LIST = [{
//         id: 1,
//         title:  "Going to Mumbai",
//         body: "Hii Guyz, I am goingt to Mumbai",
//         userId: "user4",
//         tags: ["vaction" , "mumbai" , "enjoying"],
//         reactions: 5
//     },
//     {
//         id: 2,
//         title:  "Going to Delhi",
//         body: "Hii Guyz, I am goingt to Delhi for plcement",
//         userId: "user12",
//         tags: ["passed" , "graduated" , "unblevable"],
//         reactions: 8
//     }
//     ];

    



export default PostListProvider;

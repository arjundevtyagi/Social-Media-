import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = ()=>{

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const hastagsElement = useRef();

  const handeleOnSubmit = (event)=>{
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const hastagsArr = (hastagsElement.current.value).split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    userIdElement.current.value = "";

    addPost(userId , postTitle , postBody , postReactions , hastagsArr);
    
  }

    return <form className="crete-post" onSubmit={handeleOnSubmit}>
     <div className="mb-3">
      <label htmlFor="userId" className="form-label">Post userId:</label>
      <input type="text" className="form-control" id="userId" placeholder="Enter post userId here"
      ref={userIdElement}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title:</label>
      <input type="text" className="form-control" id="title" placeholder="Enter post title here"
      ref={postTitleElement}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content:</label>
      <textarea type="text" rows={5} className="form-control" id="body" placeholder="Enter post body here"
      ref={postBodyElement}/>
      
    </div>
  
    <div className="mb-3">
      <label htmlFor="reactons" className="form-label">No. of reactions:</label>
      <input type="text" className="form-control" id="reactons" placeholder="How many people has been reacted"
      ref={postReactionsElement}/>
      
    </div>

    <div className="mb-3">
      <label htmlFor="hastags" className="form-label">Enter your hastags:</label>
      <input type="text" className="form-control" id="hastags" placeholder="Plz Enter #(hastags) using space"
      ref={hastagsElement}/>
      
    </div>
    
    
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreatePost;
import { useContext } from "react";
import style from "./Post.module.css";
import { PostList } from "../store/Post-list-store";
import { GrLike , GrDislike} from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";



export default function Post ({post}){

const {deletePost} = useContext(PostList);


    return <div 
    className={`card ${style["post-card"]}`} >
    <div className={`card-body`}>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
    onClick={() => deletePost(post.id)}>
    <RxCross1 className="deletebtn" />
  </span>
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag => <span key={tag} className="badge text-bg-primary hastag">{tag}</span>
))}
 <div className="alert alert-success reactions" role="alert">
 {post.reactions.likes} <GrLike /> | {post.reactions.dislikes} <GrDislike />
</div>
    </div>
   
  </div>
}
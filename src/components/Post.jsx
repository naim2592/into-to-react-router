import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,body,title}=post
    return (
        <div>
            <h2>ID :{id}</h2>
            <h2>Tittle :{title}</h2>
            <Link to={`/post/${id}`}> Dtails</Link>
            <button>
            <Link to={`/post/${id}`}> Dtails</Link>
            </button>
            
        </div>
    );
};

export default Post;
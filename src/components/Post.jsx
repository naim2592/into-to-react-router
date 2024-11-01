import { Link,useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,body,title}=post
    const navigate = useNavigate();

    const handleDetails=()=>{
      navigate(`/post/${id}`)
    }
    return (
        <div>
            <h2>ID :{id}</h2>
            <h2>Tittle :{title}</h2>
            <Link to={`/post/${id}`}> Dtails</Link>
            <button>
            <Link to={`/post/${id}`}> Dtails</Link>
            </button>
            <button onClick={handleDetails}>Details OB</button>
            
        </div>
    );
};

export default Post;
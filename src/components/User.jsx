import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name,username,email,id}=user
    return (
        <div style={{border:'2px solid red', background:'lightblue',borderRadius:'10px',margin:'10px'}}>
            <h2>Name : {name}</h2>
            <h4>Username : {username}</h4>
            <h3>email : {email}</h3>
            <Link to={`/user/${id}`}> Show Details</Link>
        </div>
    );
};

export default User;
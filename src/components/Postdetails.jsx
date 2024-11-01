import { useLoaderData,useNavigate } from "react-router-dom";


const Postdetails = () => {
    const navigate = useNavigate();
    const details=useLoaderData()
    const {body,id}=details
    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post No : {id}</h3>
            <p>Details:{body}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default Postdetails;
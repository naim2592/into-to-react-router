import { useLoaderData } from "react-router-dom";


const Postdetails = () => {
    const details=useLoaderData()
    const {body}=details
    return (
        <div>
            <p>Details:{body}</p>
        </div>
    );
};

export default Postdetails;
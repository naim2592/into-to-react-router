import { useLoaderData } from "react-router-dom";


const Userdetails = () => {
    const user=useLoaderData()
    const {name,website}=user
    return (
        <div>
            <h1>Details about users : {name}</h1>
            <h2>Website:{website}</h2>
        </div>
    );
};

export default Userdetails;
import { useParams } from "react-router-dom";

const User = () => {
    const {userid} = useParams();
    return (
        <div>
            <h1 className="bg-gray-500 text-center py-10 text-4xl text-white">User: {userid}</h1>
        </div>
    );
};

export default User;
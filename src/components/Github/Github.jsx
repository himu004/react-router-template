import { useEffect, useState } from "react";

const Github = () => {
    const [data, setSata] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/himu004')
        .then(res => res.json())
        .then(data => setSata(data))
        console.log(data);
    }, [])


    return (
        <div className="bg-green-500">
            <h1 className="py-20 text-center text-5xl text-white">Github Followers: {data.followers}</h1>
        </div>
    );
};

export default Github;
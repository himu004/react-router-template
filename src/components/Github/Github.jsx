import { useEffect, useState } from "react";

const Github = () => {

    const [data, setSata] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/himu004')
        .then(res => res.json())
        .then(data => 
            setSata(data))
    }, [])

    return (
        <div className="">
            <div className="bg-green-500 text-center space-y-5 py-5 text-white text-2xl">
                <div className="flex justify-center">
                    <img width={300} className="rounded-md" src={data.avatar_url} alt="" />
                </div>
                <h2>Name: {data.name}</h2>
                <h2>{data.bio}</h2>
                <h1>Github Followers: {data.followers}</h1>
            </div>
        </div>
        
    );
};

export default Github;

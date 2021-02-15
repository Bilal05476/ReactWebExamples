import React, {useState, useEffect } from 'react';

const GithubRepo = () => {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        async function getRepos(){
            const response = await fetch("https://api.github.com/users/Bilal05476/repos");
            const data = await response.json();
            setRepos(data)
        }
        getRepos();
    }, [])
    return (
        <div>
            <h1>Repos</h1>
            <ul>
            {(repos).map((repoObj, ind)=>{
                return(<li key={ind}>{repoObj.name}</li>)
            })}
            </ul>
        </div>
    )
}

export default GithubRepo;

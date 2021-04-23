import React, { useEffect, useState } from 'react';
const axios=require('axios');

const ApiDataUsers=()=>{
    const [userInfos,setUserInfos]=useState([]);
    const [pageNumber,setPageNumber] =useState(1);

    const fetchRandomData = ()=>{
        return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
        .then(({data})=>{
            return data;
        }).catch(err=>console.log('Error Occurred : ',err));
    }
    
    useEffect(()=>{
        fetchNewUser()
    },[])
    const fetchNewUser=()=>{
        fetchRandomData()
        .then(data=>{
            if(data === undefined) return;
            const newUser=[
                ...userInfos, ...data.results,
            ]
            setUserInfos(newUser);
            setPageNumber(data.info.page+1);
        })
       
    }
    
    return(
        <div>
            <button onClick={fetchNewUser}>Next User</button>
            {userInfos.map((user)=>(
                <div>
                    {user.name.first}
                    
                    <img src={user.picture.thumbnail} alt='pic'/>
                </div>
            ))}
            
        </div>
    )
}
export default ApiDataUsers;
import React, { useEffect, useState } from 'react';
const axios = require('axios');

const fetchRandomData=()=>{
  return axios.get('https://randomuser.me/api')
 .then(({data})=> {
   // handle success
   return data;
 })
 .catch(err=>{
   // handle error
   console.log(err);
 });
 };

function Api({count}) {
  const [randomDataJSON,setRandomDataJSON]=useState('');
  const [userInfos,setUserInfos]=useState([]);

  useEffect(()=>{
    fetchRandomData()
    .then(randomData=> {
    setRandomDataJSON(JSON.stringify(randomData,null,2) || '');
    setUserInfos(randomData.results);
  })
    // fetchRandomData()
    // .then( (randomData)=>setRandomDataSet(randomData.results));
    return ()=> console.log('count changed');//tear down code when the component is destroyed.
    
  },[count])
  const getUserData=(userInfo)=>{
    const {name: {first, last}} =userInfo;
    return `${first} ${last}`;
  }

  // const getUserImg=(userInfo)=>{
  //   const {picture:{large}}=userInfo;
  //   return large;
  // }
  return (
    <div>
      <div >
        {userInfos.map((userInfo)=>getUserData(userInfo))}
        <br/>
        <img src={userInfos.map((userInfo)=>userInfo.picture.large)} alt="I"/>
      </div>
        <hr/>
        <pre>{randomDataJSON}</pre>
        
        
    </div>
  );
}

export default Api;

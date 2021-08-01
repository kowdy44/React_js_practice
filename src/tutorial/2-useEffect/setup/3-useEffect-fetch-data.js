import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers]=useState([]);

  const getUsers= async function(){
    const response = await fetch(url);
    const usersRes = await response.json();
    console.log(usersRes);
    setUsers(usersRes);
  }
  useEffect(function(){
    getUsers()
  },[]);

  return (<>
  <h3>Github users</h3>
  <ul className='users'>
  {
    users.map((user)=>{
      const {id,login,avatar_url,html_url}=user;
      return <li key={id}>
        <img src={avatar_url} alt={login}></img>
        <div>
          <h4>{login}</h4>
          <a href={html_url}>Profile</a>
        </div>
      </li>
    })
  }
  </ul>
  </>);
};

export default UseEffectFetchData;

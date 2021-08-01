import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]=useState({name:'pater',age:45,message:'random message'});
  console.log(person);
  const clickHandle=function(){
    if(person.message==='random message'){
      setPerson({...person,message:'hello world'})
      console.log(person.message);
    }else{
      setPerson({...person,message:'random message'})
      console.log(person.message);
    }
  }
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={clickHandle}>change message</button>
  </React.Fragment>
  );
};

export default UseStateObject;

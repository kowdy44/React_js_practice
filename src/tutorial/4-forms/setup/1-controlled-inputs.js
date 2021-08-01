import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName]=useState('');
  const [email, setEmail]=useState('');
  const [people,setPeople]=useState([]);
  const clearItems=function(e){
    setPeople([]);
  }

  const handleSubmit=function(e){
    e.preventDefault();
    if(firstName  && email){
      const person={id:new Date().getTime().toString(),firstName:firstName,email:email};
      setPeople((people)=>{
        return[...people,person];
        // people.push(person)
        // return people;
      })
      console.log('submit')
    }else{
      console.log('empty values')
    }
  }
  
  return (
  <>
  <article>
    <form className='form'>
    <div className='form-control'>
      <label htmlFor='firstName'>Name:</label>
      <input type="text" id='firstName' value={firstName} name='firstName' onChange={(e)=>{setFirstName(e.target.value)}}></input>
    </div>
    <div className='form-control'>
      <label htmlFor='email'>Email:</label>
      <input type="text" id='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
    </div>
    <button type='submit' onClick={handleSubmit}>add person</button>
    </form>
    <button className='btn' onClick={clearItems}>Clear Items</button>
    {
      people.map((person)=>{
        const{id,firstName,email} = person;
        return <div key={id} className='item'>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })
    }
  </article>
  </>
  );
};

export default ControlledInputs;

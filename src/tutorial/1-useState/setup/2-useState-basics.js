import React, { useState } from 'react';

const UseStateBasics = () => {
  // let title="random title";
  const [title,changeTitle] = useState("random title");

  const clickHandle = function(e){
    if(title === 'random title'){
      // title ="change title";
      changeTitle('change title');
    }else{
      // title = 'random title';
      changeTitle('random title');
    }
    console.log(title);
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className='btn' onClick={clickHandle}>change title</button>
    </React.Fragment>
  
  );
};

export default UseStateBasics;

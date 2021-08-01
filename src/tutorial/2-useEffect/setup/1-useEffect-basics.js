import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  useEffect(function(){
    if(value>=1){
      document.title=`new messages(${value})`
    }
  },[value])
  return (<>
  <h1>{value}</h1>
  <button className='btn' onClick={()=>{setValue(value+1)}}>Increase value</button>
  </>);
};

export default UseEffectBasics;

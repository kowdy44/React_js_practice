import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0);
  const increaseCounter = function(){
    setValue(value+1);
  }
  const increaseCounterLate = function(){
    setTimeout(function(){
      setValue((prevValue)=>{
        return prevValue+1;
      })
    },2000)
  }
  const decreaseCounter = function(){
    setValue(value-1);
  }

  const reset = function(){
    setValue(0);
  }
  return (
    <>
    <section style={{margin:'4rem 0'}}>
    <h2>redular counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={increaseCounter}>Increase Counter</button>
    <button className='btn' onClick={reset}>Reset</button>
    <button className='btn' onClick={decreaseCounter}>decrease Counter</button>
    </section>
    <section style={{margin:'4rem 0'}}>
    <h2>Complex counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={increaseCounterLate}>Increase late</button>
    <button className='btn' onClick={reset}>Reset</button>

    </section>
    </>
  );
};

export default UseStateCounter;

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = function(state,action){
  if(action.type==="ADD_ITEM"){
    const newPeople=[...state.people,action.payload]
    return {...state,people:newPeople,isModelOpen:true,modalContent:"item added"}
  }
  if(action.type==="NO_VALUE"){
    return {...state,isModelOpen:true,modalContent:"Please Enter value"}
  }
  if(action.type==="CLOSE_MODAL"){
    return{...state,isModelOpen:false};
  }
  if(action.type==="REMOVE_ITEM"){
    const newPeople=state.people.filter((person)=>person.id!==action.payload)
    return{...state,people:newPeople};
  }
  throw new Error('No matching action');
}

const defaultState={
  people:[],
  isModelOpen:false,
  modalContent:""
}


const Index = () => {
  const [name,setName]=useState('')
  // const [people,setPeople]=useState(data);
  // const [showModal,setShowModal]= useState(false);
  const [state,dispatch] = useReducer(reducer,defaultState);

  const handleSubmit=function(e){
    e.preventDefault();
    if(name){
      const newItem={id:new Date().getTime().toString(),name}
      dispatch({type:'ADD_ITEM',payload:newItem})
      setName('');
    }else{
      dispatch({type:"NO_VALUE"});
    }
  }
  const closeModal=function(){
    dispatch({type:"CLOSE_MODAL"});
  }
  return <>
  {state.isModelOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}></Modal>}
  <form onSubmit={handleSubmit} className="form">
    <div>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
    </div>
    <button type="submit" className="btn">add</button>
  </form>
  {state.people.map((person)=>{
    return<div key={person.id} className="item">
      <h4>{person.name}</h4>
      <button onClick={()=>{dispatch({type:"REMOVE_ITEM",payload:person.id})}}>remove</button>
    </div>
  })}
  </>;
};

export default Index;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [newtask,setNewtask]= useState("")
  const handleaddtask = () =>{
setNewtask() 
  }
  return (
    <div className="App">
      <h1><em>TO DO LIST APP</em></h1>
      <input input type='text' placeholder='ADD TASK'
     onChange={handleaddtask} ></input>
      <button><em>ADD TASK</em></button>
    </div>
  );
}

export default App;

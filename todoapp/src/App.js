import logo from './logo.svg';
import './App.css';
import TodoInput from './component/TodoInput';
import { useState } from 'react';
import Todolist from './component/Todolist';


function App() { 
  const [listTodo,setlistTodo]=useState([]);
  let addList = (inputText)=>{
    setlistTodo([...listTodo,inputText])
  }
  return (
    <div className='main-container'>
      <div className="center-container">
      <TodoInput addList={addList} />
      <h1 className="app-heading">TODO</h1>
      <hr />
      
      </div>
    </div>
    
  );
}

export default App;

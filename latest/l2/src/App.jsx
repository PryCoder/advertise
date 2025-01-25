import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])


  useEffect(() => {
     const todos = JSON.parse(localStorage.getItem('todos')) || [];
     if (todos.length > 0) {
       setTodos(todos);
     }
   }, []);
 
   useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

  return (
    <>
     <h1>Learning redux toolkit </h1>

     <AddTodo />
     <Todos/>

    </>
  )
}

export default App

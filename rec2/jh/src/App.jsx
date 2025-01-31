import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useDispatch} from "react-redux"
import { useEffect } from 'react'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'

function App() {
  const [count, setCount] = useState(0)
 const[loading, setLoading] = useState(true);
 const dispatch = useDispatch();

 useEffect(()=> {
  authService.getCurrentUser()
  .then((userData)=> {
    if (userData) dispatch(login({userData}))
      else dispatch(logout())
        
  })
  .finally(()=>setLoading(false))
 },[])

return !loading ?(
  <div style={{backgroundColor:"grey",minHeight:"100%"}}>
    <Header/>
    <Footer/>
  </div>
): null
}
//   return (
//     <>
//       <h1>Appwrite </h1>

//     </>
//   )
 

export default App

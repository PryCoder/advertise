import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from "./conf/conf"

function App() {
  const [count, setCount] = useState(0)
  console.log(conf.appwriteUrl)


  return (
    <>
      <h1>Appwrite </h1>
    </>
  )
}

export default App

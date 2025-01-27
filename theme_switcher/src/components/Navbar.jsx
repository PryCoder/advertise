import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    
   <nav  className='text-blue flex  items-center justify-center top-0 left-0'>
    <ul className='flex  items-center justify-center space-x-80'>
       <Link> <span>Hi</span></Link>
        <li>when</li>
        <li>How</li>
    </ul>
   </nav>
  )
}

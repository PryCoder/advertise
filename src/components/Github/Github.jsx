import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data  = useLoaderData()
//    const [data, setData] = useState({})
   

// useEffect(()=>{
//     fetch(`https://api.github.com/users/PryCoder`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         setData(data)
//     })
// },[])

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl rounded-lg'>Github followers: {data?.followers}
     <img src={data?.avatar_url} width={200} height={180} alt='Logo' />
     
     </div>
   
  )
}

export const githubInfoLoader = async() => {
   const res =  await fetch("https://api.github.com/users/PryCoder")
   return res.json()
}

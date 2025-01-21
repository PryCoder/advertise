import React from 'react'
import {useParams} from 'react-router-dom'

export default function User() {
    const {userId} = useParams()
  return (
    <div className='text-white bg-gray-700'>User: {userId}</div>
  )
}

import React from 'react'
import { useParams } from 'react-router'

const ComponentB = () => {
    const {id} = useParams()
  return (
    <div>
        <p>User Name: {id}</p>
    </div>
  )
}

export default ComponentB

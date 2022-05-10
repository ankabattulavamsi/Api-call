import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const ComponentA = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const onClickHandle = () => {
        navigate({
            pathname: `user/${name}`
        })
    }
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={onClickHandle}>Add</button>
    </div>
  )
}

export default ComponentA

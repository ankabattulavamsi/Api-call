import React, { useEffect, useRef } from 'react'

const Ref = () => {
    const data = useRef(null)
    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(data.current.value)
    }

    useEffect(() => {
       data.current.focus()
    },[])

  return (
    <center>
      <form onSubmit={onSubmitForm}>
          <input ref={data}  type='text' placeholder='enter your name' /> <br />
          <input type="submit" />
      </form>
    </center>
  )
}

export default Ref

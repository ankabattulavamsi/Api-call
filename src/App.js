import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'
import TodoList from './TodoList'

const App = () => {
  const initialValue = JSON.parse(localStorage.getItem('todos')) || []
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')
  const [todos, setTodos] = useState(initialValue)
  const [selectGender, setSelectGender] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addButton = {
    backgroundColor: 'lightGreen',
    padding: "12px",
    border: 'none',
  }

  const inputField = {
    width: '250px',
    padding: '8px',
    margin: "6px"
  }

  const firstNameString = /^[a-zA-Z]*$/

  const numberIsNumber = /^\d+$/


  const onSubmitHandle = e => {
    e.preventDefault()
    setTodos([...todos, {id: uuidv4(), firstName, lastName, number, selectGender}])
    console.log(todos)
    setErrors(Validation(firstName))
    setErrors(Validation(lastName))
    setErrors(Validation(number))
    setFormSubmitted(true)
  }

  const Validation = (e) => {
    let errors = {};

    if(!firstName && e.target.value.match(firstNameString)){
        errors.firstName = "first name is Required"
    }
    else if(firstName.length >= 5 && firstName.length <= 50){
      errors.firstName = "characters should be 5 to 50 "
    }

    if(!lastName && e.target.value.match(firstNameString) ) {
        errors.lastName = "last name is required"
    }
    else if(lastName.length >= 5 || lastName.length <= 50){
      errors.lastName = "characters should be 5 to 50 "
    }
    
    if(!number && e.target.value.match(numberIsNumber)) {
        errors.number = 'number should be valid'
    }
    else if(number.length < 10) {
        errors.number = "numbers should be more than 10 digits"
    }
  return errors
}

  const onCHangeHandleFirstName = e => {
    if (e.target.value.match(firstNameString) ) {
      setFirstName(e.target.value)
    }
    else {
      alert("first name should be a string")
    }
  }

  const onChangeHandleLastName = (e) => {
    if (e.target.value.match(firstNameString)) {
      setLastName(e.target.value)
    }
    else {
      alert("first name should be a string")
    }
  }

  const onChangeHandleNumber = e => {
    if (e.target.value.match(numberIsNumber)) {
      setNumber(e.target.value)
    } 
    else {
      alert("please enter valid number")
    }
  }
  
  return (
    <>
    {formSubmitted ? (
      <>
      <h1 className='heading'>Phone Book</h1>
    <TodoList todos={todos} setTodos={setTodos} setFormSubmitted={setFormSubmitted} />
    <hr />
    </>
    ) : (
      <center >
      <form onSubmit={onSubmitHandle} className='form-control'>
        <div>
          <label htmlFor='first-name'>First Name :</label>
        <input style={inputField} name={firstName} value={firstName} onChange={onCHangeHandleFirstName} id="first-name" type="text" placeholder='firstname' /> 
        {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div>
        <label htmlFor='last-name'>Last Name: </label>
        <input style={inputField} name="lastName" value={lastName} onChange={onChangeHandleLastName} id ="last-name" type="text" placeholder='lastname' /> 
        {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div>
        <label htmlFor='phone-number'>Phone Number: </label>
        <input style={inputField} value={number} name="number" onChange={onChangeHandleNumber}  id="phone-number" type="text" placeholder='phone number' /> 
        {errors.number && <p>{errors.number}</p>}
        </div>
        <div>
          <label htmlFor='gender'>Gender: </label>
          <div className='form-radio' id="gender">
                      <div>
                          <label htmlFor='male' className='radio'>Male</label>
                          <input type="radio" id="male" checked={selectGender === "Male"} value='Male' onChange={(e) => setSelectGender(e.target.value)} />
                      </div> <br />
                      <div>
                          <label htmlFor='female' className='radio'>Female</label>
                          <input type="radio" id="female" checked={selectGender === "Female"} value='Female' onChange={(e) => setSelectGender(e.target.value)} />
                      </div>
                  </div>
                </div>
        <button  type='submit' style={addButton}>Add Contact</button>
      </form>
      <hr />
    </center>
    ) }
    </>
  )
}

export default App



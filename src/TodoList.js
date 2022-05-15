import React from 'react'


const TodoList = ({todos, setTodos, setFormSubmitted, selectGender}) => {
    const listItems = {
        listStyleType: 'none',
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between"
    }

    const headListItems = {
        listStyleType: 'none',
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
    }

    const width =  {
        width: '1050px'
    }

    const onClickHandle = ({id}) => {
        const deleteTodo = todos.filter(each => each.id !== id)
        setTodos(deleteTodo)
    }

    const onClickHandleShow = () => {
        setFormSubmitted(false)
    }

  return (
      <>
    <div>
        <div style={width}>
        <li style={headListItems}>
            <h4 className='list-head'>First Name</h4>
            <h4 className='list-head' list-head>Last Name</h4>
            <h4 className='list-head' list-head>Gender</h4>
            <h4 className='list-head' list-head>Phone Number</h4>
            
        </li>
        </div>
        <hr />
      {todos.map(eachTodo =>
      <>
        <li style={listItems} key={eachTodo.id}>
            <p>{eachTodo.firstName}</p>
            <p>{eachTodo.lastName}</p>
            <p >{eachTodo.selectGender}</p>
            <p>{eachTodo.number}</p>
            
            <button onClick={() => onClickHandle(eachTodo)}>Delete</button>
        </li>
        <hr />
        </>
        )}
    </div>
    <button onClick={onClickHandleShow} style={{textAlign : "center"}}>show form</button>
    </>
  )
}

export default TodoList

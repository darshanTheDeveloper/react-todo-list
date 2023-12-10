import React, { useState } from 'react'
import './App.css'


function TodoList(props) {
  const [task, setTask] = useState('none')

  function handleChange(e) {
    e.target.checked ? setTask('line-through') : setTask('none')
  }

  return (
    <div className='todo'>
      <div>
        <input type="checkbox" onChange={handleChange} />
        <p style={{ textDecoration: task }}
        >{props.item}</p>
      </div>
      <i class="fa-solid fa-trash" onClick={() => props.onDelete(props.id)}></i>
    </div>
  )
}

export default TodoList
import React, { useState } from 'react'
import TodoList from './TodoList'
import './App.css'

export default function App() {
   const [newItem, setItem] = useState("")
   const [todoList,setTodoList] = useState([])

   function handleChange(e) {
      setItem(e.target.value)
   }

   function handleDelete(id){
       setTodoList(todoList.filter(ele=>ele.id!==id))
   }

   function handleClick(){
       setTodoList((previous)=>{
           return [
              ...previous,
              {
                 id:crypto.randomUUID(),
                 item: newItem,
                 completed:false
              }
           ]
       })
   }



   return (
      <div className='App'>
         <form onSubmit={(e)=>e.preventDefault()}>
            <input
               type="text"
               name="input"
               id="input"
               value={newItem}
               onChange={handleChange}
               autoComplete="false"
               autoCorrect="false"
               spellCheck="false"
            />
            <button 
               type="submit"
               onClick={handleClick}
            ><i class="fa-solid fa-plus"></i></button>
         </form>
         <div  className='todo-list'>
         {
            todoList.map((item)=>(
            <TodoList 
               key={item.id} 
               id={item.id} 
               item = {item.item} 
               completed={item.completed}
               onDelete = {handleDelete}
            />)
            )
         }
         </div>
      </div>
   )

}




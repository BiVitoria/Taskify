import './App.css'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import { useEffect, useState } from 'react'
import {v4} from 'uuid'

function App(){  
  const[tasks, setTasks]= useState(JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks) )
  }, [tasks])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isComplete: !task.isComplete}
      }
      return task
    })
    setTasks(newTasks);
  }
 
  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId )
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(), 
      title: title,
      description: description,
      isComplete: false,
    };
    setTasks([...tasks, newTask])
  }

  return (

   <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
     <div className='w-[500px] space-y-4 '> 
      <h1 className='text-3xl text-slate-100 font-bold flex justify-center'>Gerenciador de tarefas</h1>
      <AddTask  onAddTaskSubmit={onAddTaskSubmit}/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
     </div> 
   </div>
)
}
export default App

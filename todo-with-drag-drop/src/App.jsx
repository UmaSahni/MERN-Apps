import { useEffect, useState } from 'react'
import CreateTask from './Components/CreateTask'
import ListTask from './Components/ListTask'

function App() {
  const [task, setTask] = useState([])
useEffect(()=>{
setTask(JSON.parse(localStorage.getItem("tasks")))
},[])
  console.log(task)
  return (
    <div className='bg-slate-100  gap-16 pt-3  items-center flex flex-col w-screen h-screen' >
    <CreateTask task={task} setTask={setTask}/>
    <ListTask task={task} setTask={setTask}  />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import CreateTask from './Components/CreateTask'
import ListTask from './Components/ListTask'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


function App() {
  const [task, setTask] = useState([])
useEffect(()=>{
setTask(JSON.parse(localStorage.getItem("tasks")))
},[])
  console.log(task)
  return (
    <DndProvider backend={HTML5Backend}>
    <div className='bg-slate-100  gap-16 pt-32 p-3 items-center flex flex-col w-screen h-screen' >
    <CreateTask task={task} setTask={setTask}/>
    <ListTask task={task} setTask={setTask}  />
    </div>
    </DndProvider>
  )
}

export default App

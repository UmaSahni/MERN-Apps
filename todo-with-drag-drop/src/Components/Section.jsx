import React from 'react'

const Section = ({status, task, closed, done, todo, progress, setTask,}) => {
 let text = "todo"
 let bg = "bg-slate-500"
 let tasksToMap = todo

 if(status == "progress"){
    text = "progress",
    bg="bg-purple-500",
    tasksToMap = progress
 }

 if(status == "closed"){
    text = "closed",
    bg="bg-red-500",
    tasksToMap = closed
 }

 if(status == "done"){
    text = "done",
    bg="bg-green-500",
    tasksToMap = done
 }


    return (
    <div className={`w-64`} >
        <Header text={text} bg={bg} count={tasksToMap.length} >{status}</Header>
        
        {
            tasksToMap.length > 0 && tasksToMap.map(((t) => <Task key={t.id} task={task} t={t} setTask={setTask} /> ))
        }
    </div>
  )
}

export default Section


const Header = ({task, text, bg, count}) => {
  return (
    <div className={`${bg} text-slate-50  flex items-center h-12 pl-4 rounded-md uppercase text-sm`}  >{text}
    <div className='ml-2 bg-white w-5 h-5 rounded-full flex items-center justify-center text-black' >{count}</div>
    </div>
  )
}

import toast, { Toaster } from 'react-hot-toast';

const Task = ({t, task, setTask}) => {


    const handleRemove = (id) =>{
        console.log(id)
        
        const ftask = task.filter((t)=>t.id !== id)
        
        localStorage.setItem("tasks", JSON.stringify(ftask))
        setTask(ftask)
        toast.success("Task Removed!")
        }

    return (
        <>
        <Toaster />
        <div className={`relative p-4 mt-8 shadow-md cursor-grab`} >
        {t.name}
        <button onClick={()=>handleRemove(t.id)} className='absolute bottom-1 right-1' >-</button>
        </div>
        </>
     
    )
  }


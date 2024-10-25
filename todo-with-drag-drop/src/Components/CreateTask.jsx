import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
const CreateTask = ({setTask, task}) => {
 const [singleTask, setSingleTask] = useState({
    id:"",
    name:"",
    status: "todo" // it can also be progress or closed
 })


 
 const handleSubmit = (e) =>{
    e.preventDefault()


    if(singleTask.name.length < 1){
        return toast.error('Please write your task!')
    }


    console.log(singleTask)
    setTask((pre)=>{
        const list = [...pre, singleTask]
        localStorage.setItem("tasks", JSON.stringify(list))
        return list
    })
    toast.success('task created')
 }


    return (
    <form onSubmit={handleSubmit}>
        <Toaster />
        <input value={singleTask.name} onChange={(e)=>setSingleTask({...singleTask, "id":uuidv4(),name:e.target.value}, )} type="text" className=' rounded-md mr-4 h-12 w-64 px-1 bg-slate-100 border-2 border-slate-400' />
        <button type='submit' className= ' border-none bg-cyan-500 rounded-md px-4 h-12 text-white' >create</button>
    </form>
  )
}

export default CreateTask
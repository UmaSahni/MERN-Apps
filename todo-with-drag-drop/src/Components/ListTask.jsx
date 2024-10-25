import React, { useEffect, useState } from 'react'
import Section from './Section'

const ListTask = ({task, setTask}) => {
    const [todo, setTodo] = useState([])
    const [progress, setProgress] = useState([])
    const [done, setDone] = useState([])
    const [closed, setClosed] = useState([])
  
    useEffect(()=>{
        const fTodos = task.filter(task => task.status == "todo")
        const fProgress = task.filter(task => task.status == "progress")
        const fDone = task.filter(task => task.status == "done")
        const fClosed = task.filter(task => task.status == "closed")

        setTodo(fTodos)
        setProgress(fProgress)
        setDone(fDone)
        setClosed(fClosed)

    },[task])
  
  const statusNames = ["todo", "progress", "done", "closed"]
    return (
    <div className='flex gap-16' >
{
    statusNames.map((status, i)=>{
        return <Section done={done} closed={closed} todo={todo} progress={progress} setTask={setTask} task={task} key={i} status={status} />
    })
}
    </div>
  )
}

export default ListTask
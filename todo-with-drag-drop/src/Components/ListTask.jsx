import React, { useEffect, useState } from 'react'

const ListTask = ({task, setTask}) => {
    const [todo, setTodo] = useState([])
    const [progress, setProgress] = useState([])
    const [Done, setDone] = useState([])
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
  
  
    return (
    <div>ListTask</div>
  )
}

export default ListTask
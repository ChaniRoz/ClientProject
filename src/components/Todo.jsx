import React from "react"
import TaskCard from './DrowSingleTask'
import AddTaskDialog from './AddNewTask'

const Todo = () => {
    return (
        <>
            <h1>Todo</h1>
            <AddTaskDialog/>
            <TaskCard />
        </>
    )

}
export default Todo
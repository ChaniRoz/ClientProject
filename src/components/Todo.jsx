import React from "react"
import TaskCard from './DrowSingleTask'
import FormDialog from './AddNewItem'

const Todo = () => {
    return (
        <>
            <h1>Todo</h1>
            <FormDialog/>
            <TaskCard />
        </>
    )

}
export default Todo
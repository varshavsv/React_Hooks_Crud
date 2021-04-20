import React,{ useContext } from "react"
import {TaskListContext} from "../Context/TaskListContext"
import Task from "./Task"

const TaskList=()=>
{
    const {task} =useContext(TaskListContext)
    return(
        <div>
            {
                task.length?(
                    <ul className="list">
                        {
                            task.map(task=>
                                {
                                    return <Task task={task} key={task.id}/>
                                })
                        }
                    </ul>
                ):<h3>No Task</h3>
            }
        </div>
    )
}
export default TaskList;
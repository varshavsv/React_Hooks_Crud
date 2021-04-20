import React,{useContext} from 'react'
import {TaskListContext} from '../Context/TaskListContext'

function Task({task}) {
    const {removeTask,finditem}=useContext(TaskListContext)
    return (
        <li className="list-item">
            <div>
                <table>
                    <tr>
                        <td> <span>{task.title} </span></td>
                        <td>  <span>{task.pass}</span></td>
                        <td><button onClick={()=>removeTask(task.id)} className="btn btn-danger">Delete</button>&nbsp;
                        <button onClick={()=>finditem(task.id)} className="btn btn-success">Edit</button></td>
                    </tr>
                </table>
            {/* <span>{task.title} </span> */}
            {/* <span>{task.pass}</span> */}
            {/* <button onClick={()=>removeTask(task.id)} className="btn btn-danger">Delete</button>&nbsp;
            <button onClick={()=>finditem(task.id)} className="btn btn-success">Edit</button> */}
        </div>
        </li>
    )
}

export default Task

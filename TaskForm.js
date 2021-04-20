import { useContext,useState,useEffect } from "react";
import {TaskListContext} from "../Context/TaskListContext";

const TaskForm=()=>
{
    const {addTask,clearList,edittask,edititem}=useContext(TaskListContext)
    const [title,settitle]=useState('')
    const [pass,setpass]=useState('')

    useEffect(() => {
      if(edititem)
      {
          settitle(edititem.title)
          setpass(edititem.pass)
      }
      else
      settitle('')
      setpass('')
    }, [edititem])

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        if(!edititem)
        {
            addTask(title,pass)
            settitle('')
            setpass('')
        }
        else{
            edittask(title,pass,edititem.id)
            settitle('')
            setpass('')
        }
    }
    const handleChange=(e)=>
    {
        settitle(e.target.value)
        // console.log(title)
    }
    const handleChange1=(e)=>
{
    setpass(e.target.value)

}


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
            <label>Enter username</label>
            <input type='text' value={title} onChange={handleChange}/>
            </div>
           <div>
           <label>Enter password</label>
            <input type='text' value={pass} onChange={handleChange1}/>
           </div>
            
           <div>
           <button type='submit' className="btn btn-secondary">{edititem?'Update':'Add'}</button>&nbsp;&nbsp;
            <button type='reset' className="btn btn-light" onClick={clearList}>clear</button>
           </div>
            </form>
        </div>
    )
}
export default TaskForm;
import { useEffect, useReducer } from "react";
import { AddTask,reducer,TaskList,useReducers } from "./index";


const TaskApp=()=>{

   
  const {onAddTask,state,onRemoveTask,onUpdateTask} = useReducers()//este es un custom hook

  //cada vez que se elimina, agrega o actualiza el state, se guarda en el localStorage y
  //use Effect se encarga de eso
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(state))
  },[state])

  return <div className="content">

  <div>
  <TaskList tasks = {state} onRemoveTask={onRemoveTask} onUpdateTask={onUpdateTask} />
  </div>
  
  <div>
    <AddTask onAddTask = {onAddTask} />
 </div>
 
  </div>
  
}

export default TaskApp;

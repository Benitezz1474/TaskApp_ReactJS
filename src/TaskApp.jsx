import { useEffect, useReducer } from "react";
import { AddTask,reducer,TaskList,useReducers } from "./index";
import { storageShared } from "./Hooks/useContext";


const TaskApp=()=>{



   
  const {onAddTask,state,onRemoveTask,onUpdateTask} = useReducers()//este es un custom hook

  console.log(state)

  //cada vez que se elimina, agrega o actualiza el state, se guarda en el localStorage y
  //use Effect se encarga de eso
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(state))
  },[state])

  return <div className="content">

    <storageShared.Provider value={ {onRemoveTask,onUpdateTask} }>


  <div>
  <TaskList tasks = {state} />
  </div>
  
  <div>
    <AddTask onAddTask = {onAddTask} />
 </div>

    </storageShared.Provider>
 
  </div>
  
}

export default TaskApp;

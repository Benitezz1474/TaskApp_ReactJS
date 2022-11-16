import { useEffect, useReducer } from "react";
import { AddTask,reducer,TaskList } from "./index";

const initialState = JSON.parse(localStorage.getItem("task")) || []

const TaskApp=()=>{

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(state))
  },[state])


  //Esta funcion, al hacer el dispatch, AÑADE un objeto (tarea) al state
  const onAddTask=(inputValue)=>{

    const result = state.map(obj => {
      if(obj.id == inputValue.id ) return "it found";
    })

    if(result.includes("it found")) return
    
    
    const action = {
      type:"Add",
      payload: inputValue
    }
    
    dispatch(action)
    
  }


  //Esta funcion elimina elementos (tareas en este caso) por ID
  const onRemoveTask=(id_task)=>{

    
    const action ={

      type:"Del",
      payload: id_task
    }

    dispatch(action)

  }

  const onUpdateTask=(id_task)=>{

    const action = {
      type:"Update",
      payload: id_task
    }

    dispatch(action);

  }

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

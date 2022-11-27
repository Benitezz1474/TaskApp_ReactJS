import { reducer } from "../reducer";
import { useReducer } from "react";

const initialState = JSON.parse(localStorage.getItem("task")) || []

export const useReducers=()=>{

    const [state, dispatch] = useReducer(reducer, initialState);

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

      return{
        onAddTask,
        onRemoveTask,
        onUpdateTask,
        state,
      }
}
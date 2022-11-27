import { useContext } from "react"
import { storageShared } from "./Hooks/useContext";

export const TaskItem=({tasks})=>{
    
    //del useContext obtengo las funciones onRemoveTask y onUpdateTask para 

    const storage_value = useContext(storageShared);

    const {onRemoveTask, onUpdateTask} = storage_value;

    //Las funciones onUpdate y onRemove que vienen del useContext
    //activan el dispatch() del useReducer en <TaskApp />  ;)
        
    return <div className="taskItem" onClick={()=>onUpdateTask(tasks.id)} >
        
    <h2 className={tasks.done ? "green" : ""}> {tasks.task} </h2>
    
    <button onClick={()=> onRemoveTask(tasks.id) } >Remove</button>

    </div>
}
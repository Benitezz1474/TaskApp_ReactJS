export const TaskItem=({tasks,onRemoveTask,onUpdateTask})=>{
    
    //Las funciones onUpdate y onRemove que vienen del padre
    //activan el dispatch() del useReducer en <TaskApp />  ;)

    const {done} = tasks

    return <div className="taskItem" onClick={()=>onUpdateTask(tasks.id)} >
        
    <h2 className={done ? "green" : ""}> {tasks.task} </h2>
    
    <button onClick={()=> onRemoveTask(tasks.id) } >Remove</button>

    </div>
}
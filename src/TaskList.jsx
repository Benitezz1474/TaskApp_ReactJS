import {TaskItem} from "./index";

export const TaskList =({tasks,onRemoveTask,onUpdateTask})=>{

    return <>
    
    {
        
        //IMPORTANTE:
        //las propiedades onRemoveTask y onUpdateTask vienen del padre de <TaskList />,
        //es decir vienen de <TaskApp />
        
        //Este seria el "mapa" de las props:

        //Abuelo -> Padre -> Hijo = <TaskApp/> -> <TaskList/> -> <TaskItem/> 
        //De esta forma se pasan las props (NO Redux)
        
        
        //Por cada task renderizo un nuevo componente y le paso las props.
        tasks.map(task => {
            return <TaskItem tasks = {task} key={task.id} onRemoveTask={onRemoveTask} onUpdateTask={onUpdateTask} />
        })
    }

    </>
}
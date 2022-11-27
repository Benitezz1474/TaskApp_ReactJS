import {TaskItem} from "./index";

export const TaskList =({tasks})=>{


    return <>
    
    {
        
        //IMPORTANTE:
     
        //Este seria el "mapa" de las props:

        //Abuelo -> Padre -> Hijo = <TaskApp/> -> <TaskList/> -> <TaskItem/> 
        //De esta forma se pasan las props (NO Redux, SI useContext)
        
        
        //Por cada task renderizo un nuevo componente y le paso las props.
        tasks.map(task => {
            return <TaskItem key={task.id} tasks = {task} />
        })
    }

    </>
}
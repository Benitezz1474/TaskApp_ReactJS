
import { useState } from "react"


export const useForm=()=>{

    const [id_error, setId_error]= useState(false);
    const [task_error, setTask_error] = useState(false)
    
    //Aqui se almacena el valor del input que cambia
    const [inputValue, setInputValue] = useState({
        id: "",
        task: "",
        done: false
    })
    
    const {done,id,task} =inputValue 

    //validar inpust

    //esta funcion valida el ID

    const testId=()=>{
        
        if(id.length <= 0){
            setId_error(false)
        }
        
        else {
            setId_error(true)
        }

    }


    //esta funcion valida el Task
    const testTask=()=>{
        
        if(task.length < 5){
            setTask_error(false)
        }
        
        else {
            setTask_error(true)
        }
   }


    //esta funcion lee el name del input para saber cual de TODOS
    //está cambiando y posteriormente asignarle ese valor
    const handleInput=(e)=>{

        testTask();
        testId();
        
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
        
    }

    return{
        inputValue,
        handleInput,
        id_error,
        task_error
    }
}
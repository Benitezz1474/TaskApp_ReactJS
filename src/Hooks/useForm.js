
import { useState } from "react"


export const useForm=()=>{

    //Aqui se almacena el valor del input que cambia
    const [inputValue, setInputValue] = useState({
        id: "",
        task: "",
        done: false
    })
    
    //esta funcion lee el name del input para saber cual de TODOS
    //está cambiando y posteriormente asignarle ese valor
    const handleInput=(e)=>{

        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })

    }

    return{
        inputValue,
        handleInput
    }
}
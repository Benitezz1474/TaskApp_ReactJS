import { useForm } from "./Hooks/useForm"

export const AddTask=({onAddTask})=>{

    //obtengo los datos/funciones de useForm
    const {handleInput,inputValue} = useForm()

    //al hacer el submit, se activa la prop del hijo que tiene 
    //como referencia una funcion en el padre

    const handleForm=(e)=>{
        e.preventDefault()

        const {done,id,task} = inputValue

         //Se validan los campos
        if(done.length <=3 || task.length <=3 || isNaN(id) == true) return

        //prop que tiene como referencia una funcion del padre
        onAddTask(inputValue);
    }

    return <>
     <form onSubmit={handleForm} >
        <input type="text" name="id"  placeholder="Id"  onChange={handleInput} />
        <input type="text" name="task" placeholder="Task"  onChange={handleInput}/>
        <input type="submit" value="Enviar" />
     </form>
    </>
}
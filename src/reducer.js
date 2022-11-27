export const reducer =(state,action)=>{
    
        switch(action.type){

            //Agrega una nueva tarea al state 
            case "Add":
                return [...state, action.payload]

                //elimina una tare del state
            case "Del":
                return state.filter(ele => ele.id !== action.payload)

                //"actualiza" una tarea del state
            case "Update":
                return state.map(task => {

                    if(task.id == action.payload){
                        return{
                            ...task,
                            done: !task.done
                        }
                    }

                    return task;
                })

                //simplemente retorna el state en caso que no se execute Add, Del o Update ;)
            default:
                return state
        }

    
}
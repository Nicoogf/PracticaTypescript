import { Tarea } from "./Tarea"

type ListaTarea = {
    ListaTarea : string[],
    borrarTarea : (index:number) => void
}

const ListaTareas = ({ListaTarea , borrarTarea}:ListaTarea) => {
  return (
    <div className="flex flex-col gap-y-2">
        {ListaTarea.map((tarea,index)=>(
            <Tarea key={index} tarea={tarea} borrarTarea={ ()=> borrarTarea(index)}>  </Tarea>
        ))}
    </div>
  )
}

export default ListaTareas
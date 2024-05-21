import { useState } from "react"
import ListaTareas from "./ListaTareas"

export const TodoApp = () => {
   const [ nuevatarea , setNuevaTarea] = useState<string>( "" )
   const [ listaTareas, setListaTareas ] = useState<string[]>([])

   const handleAddTask = () =>{
    if(nuevatarea.trim() === "" ) return
    setListaTareas( tareaAnteriores => [...tareaAnteriores , nuevatarea])
    setNuevaTarea("")
   }
   const handleBorrarTarea = ( index:number) => {
    setListaTareas(tareas => tareas.filter( (_,i)=> i !== index ))
   }

  return (
    <div className="w-[90%] mx-auto">
        <h1> Lista de pendientes </h1>
        <input type="text"  onChange={(e)=>setNuevaTarea(e.target.value)} placeholder="Nueva tarea"/>
        <button className="px-3 py-1 rounded-lg bg-sky-500 text-white" onClick={handleAddTask}> Agregar Tarea</button>
        
       <ListaTareas ListaTarea={listaTareas} borrarTarea={handleBorrarTarea}/>
    </div>
  )
}
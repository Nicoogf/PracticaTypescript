import React from 'react'

type Tarea = {
    tarea: string,
    borrarTarea: () => void
}

export const Tarea = ({tarea,borrarTarea} : Tarea) => {
  return (
    <div className='flex flex-col bg-gray-400'>
        <span> {tarea} </span>
        <button className='bg-red-500 text-white py-1 px-3 rounded-lg' onClick={borrarTarea}> Borrar Tarea</button>
    </div>
  )
}
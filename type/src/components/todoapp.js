"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoApp = void 0;
const react_1 = require("react");
const ListaTareas_1 = __importDefault(require("./ListaTareas"));
const TodoApp = () => {
    const [nuevatarea, setNuevaTarea] = (0, react_1.useState)("");
    const [listaTareas, setListaTareas] = (0, react_1.useState)([]);
    const handleAddTask = () => {
        if (nuevatarea.trim() === "")
            return;
        setListaTareas(tareaAnteriores => [...tareaAnteriores, nuevatarea]);
        setNuevaTarea("");
    };
    const handleBorrarTarea = (index) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index));
    };
    return (<div className="w-[90%] mx-auto">
        <h1> Lista de pendientes </h1>
        <input type="text" onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Nueva tarea"/>
        <button className="px-3 py-1 rounded-lg bg-sky-500 text-white" onClick={handleAddTask}> Agregar Tarea</button>
        
       <ListaTareas_1.default ListaTarea={listaTareas} borrarTarea={handleBorrarTarea}/>
    </div>);
};
exports.TodoApp = TodoApp;

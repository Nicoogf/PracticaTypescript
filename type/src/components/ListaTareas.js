"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tarea_1 = require("./Tarea");
const ListaTareas = ({ ListaTarea, borrarTarea }) => {
    return (<div className="flex flex-col gap-y-2">
        {ListaTarea.map((tarea, index) => (<Tarea_1.Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}>  </Tarea_1.Tarea>))}
    </div>);
};
exports.default = ListaTareas;

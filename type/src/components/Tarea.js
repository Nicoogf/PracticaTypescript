"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
const react_1 = __importDefault(require("react"));
const Tarea = ({ tarea, borrarTarea }) => {
    return (<div className='flex flex-col bg-gray-400'>
        <span> {tarea} </span>
        <button className='bg-red-500 text-white py-1 px-3 rounded-lg' onClick={borrarTarea}> Borrar Tarea</button>
    </div>);
};
exports.Tarea = Tarea;

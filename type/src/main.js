"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const todoapp_tsx_1 = require("./components/todoapp.tsx");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <todoapp_tsx_1.TodoApp> 

    </todoapp_tsx_1.TodoApp>
  </react_1.default.StrictMode>);

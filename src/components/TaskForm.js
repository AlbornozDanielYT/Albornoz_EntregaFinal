import React, {useState} from "react";
import '../css/TaskForm.css';
import {v4 as uuidv4} from 'uuid';


function TaskForm(props) {

    const [input, setInput] =useState('');

    const driveChange = e => {
        setInput(e.target.value);

    }


    const driveSend = e => {
        e.preventDefault();
    
        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false,
        }

        props.onSubmit(newTask);
    };

    return (
        
        <form className="TaskForm" onSubmit={driveSend}>
            <input 
            className="TaskInput"
            type="text"
            placeholder="Escribe una Tarea"
            name='texto'
            onChange={driveChange}
            />
            <button className="TaskButton"> Agregar Tarea</button>
        </form> 
    );
}
export default TaskForm;
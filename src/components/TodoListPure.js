import React from 'react';

export const TodoListPure = (props) => {
    return (
        <div>
            <label>
                Nova Tarefa:
                <input onKeyUp={props.onAddTask} autoFocus type='text' />
            </label>
            <p>Minhas tarefas:</p>
            <ul>
                {props.tasks.map(task=>{
                    return <li>{task}</li>
                })} 
            </ul>
        </div>
    );
}
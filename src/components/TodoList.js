import React from 'react';

export class TodoList extends React.Component { 
    render(){
        return (
            <div>
                <label>
                    Nova Tarefa:
                    <input autoFocus type='text' />
                </label>
                <p>Minhas tarefas:</p>
                <ul>
                    <li>Estudar</li>
                    <li>Correr</li>
                    <li>Jogar Video-Game</li>
                </ul>
            </div>
        );
    }
}
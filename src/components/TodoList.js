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
                   {this.props.tasks.map(task=>{
                       return <li>{task}</li>
                   })} 
                </ul>
            </div>
        );
    }
}
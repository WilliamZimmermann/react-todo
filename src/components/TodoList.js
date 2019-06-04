import React from 'react';

/**
 * @deprecated - Use TodoListPure instead
 */
export class TodoList extends React.Component { 
    render(){
        return (
            <div>
                <label>
                    Nova Tarefa:
                    <input onKeyUp={this.props.onAddTask} autoFocus type='text' />
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
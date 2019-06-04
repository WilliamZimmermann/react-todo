import React from 'react';
// import { TodoList } from './components/TodoList';
import { TodoListPure } from './components/TodoListPure';


class App extends React.Component {
  
  constructor(){
    //Call the father (this is required)
    super(); 
    // Here is the state of our application
    this.state = {
      tasks: ['Estudar', 'Correr', 'VideoGame', 'IGTI']
    }
  }
  
  /**
   * Add task
   * @param {*} event 
   */
  addTask(event){
    // IF press key wasn't the Enter (13)
    if(event.keyCode !== 13){
      return; // 
    }else { // Is the Enter key
      const newTask = event.target.value;
      // Change state
      this.setState({tasks: [...this.state.tasks, newTask]});
    }
  }

  render() {
    return (
    <div className="App">
      <h1>React ToDo</h1>
      <TodoListPure onAddTask={(event) => this.addTask(event)} tasks={this.state.tasks}></TodoListPure>
    </div>
    );
  }
}

export default App;

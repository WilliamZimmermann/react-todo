import React from 'react';
import { TodoList } from './components/TodoList';

class App extends React.Component {
  
  constructor(){
    //Call the father (this is required)
    super(); 
    // Here is the state of our application
    this.state = {
      tasks: ['Estudar', 'Correr', 'VideoGame', 'IGTI']
    }
  }

  render() {
    return (
    <div className="App">
      <h1>React ToDo</h1>
      <TodoList tasks={this.state.tasks}></TodoList>
    </div>
    );
  }
}

export default App;

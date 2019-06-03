import React from 'react';
import { TodoList } from './components/TodoList';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h1>React ToDo</h1>
      <TodoList></TodoList>
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, title: 'meeting the boss', completed: false},
      {id: 2, title: 'take kids to school', completed: false},
      {id: 3, title: 'cook a meal', completed: true},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

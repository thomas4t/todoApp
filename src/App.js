import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: "1",
        title: "something",
        isCompleted: false
      },
      {
        id: 2,
        title: "anyhting",
        isCompleted: false
      },
      {
        id: 3,
        title: "donething",
        isCompleted: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };
  deleteTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <h1>An app</h1>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;

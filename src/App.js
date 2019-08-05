import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import '../src/App.css';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoData
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    })
  }

  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    })
  }


  render() {
    return (
      <div className="main-container">
        <div className="header">
          <h1>Todo List App</h1>
        </div>
        <TodoForm clearCompleted={this.clearCompleted} addTodo={this.addTodo}/>
        <TodoList toggleTodo={this.toggleTodo} todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;

import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div 
      onClick={() => {this.props.toggleTodo(this.props.todo.id)}} 
      className={`todo${this.props.todo.completed ? ' completed' : ''}`}
      >
        <p className="todo-text">{this.props.todo.task}</p>
      </div>
    )
  }
}

export default Todo;
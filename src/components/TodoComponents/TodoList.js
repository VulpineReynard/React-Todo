// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(){
    super();
  }

  render() {
    console.log(this.props.todoList)
    return(
      <div className="todo-list">
        <h2 className="todo-list-title">Todo List</h2>
        {this.props.todoList.map((todoItem, index) => {
           return <Todo todo={todoItem} key={todoItem.id} 
                        toggleTodo={this.props.toggleTodo}
                  />
        })}
      </div>
    )
  }
}

export default TodoList;
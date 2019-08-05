import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitTodo = (event) => {
    event.preventDefault();
      this.props.addTodo(this.state.todo);
      this.setState({
        todo: ''
      })
    }

  render() {
    return(
      <form onSubmit={this.submitTodo} className="todo-form">
        
        <div className="btn-container">
          <button 
            className="add-todo-btn">Add Todo
          </button>

          <button 
            onClick={this.props.clearCompleted} className="clear-completed-btn">Clear Completed
          </button>
        </div>

        <input 
          placeholder="What todo..." 
          onChange={this.handleChanges} 
          value={this.state.todo} 
          name="todo" 
          className="add-todo-input"
          required
        />

      </form>
    );
  }
}

export default TodoForm;
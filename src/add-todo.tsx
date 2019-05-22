import React, { Component } from 'react';
import styles from './todos.module.css';

interface TodoItem {
  todoText: string;
}

interface AddTodoItem {
  handleAdd: (todo: string) => void;
}

class AddTodo extends Component<AddTodoItem, TodoItem> {
  public constructor(props: AddTodoItem) {
    super(props);
    this.state = {
      todoText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      todoText: event.target.value
    });
  }

  public handleSubmit(): void {
    if (this.state.todoText.trim().length > 0) {
      this.props.handleAdd(this.state.todoText);
      this.setState({
        todoText: ''
      });
    }
  }

  public render(): React.ReactElement {
    return (
      <div className={styles['row']}>
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button className="button" onClick={this.handleSubmit}>
          +
        </button>
      </div>
    );
  }
}
export default AddTodo;

import React, { Component } from 'react';
import Title from './title';
import AddTodo from './add-todo';
import TodoList from './todo-list';

interface TodoItem {
  text: string;
  id: number;
}

interface TodoItemArray {
  todos: TodoItem[];
}

class TodoApp extends Component<{}, TodoItemArray> {
  public constructor(props: {}) {
    super(props);

    //initialize state - `todos` is our initial dummy array of todos
    this.state = {
      todos: [
        {
          text: ' This is a simple todo list app written in React!',
          id: 1
        },
        {
          text: 'Hover over todos and click on the `X` to delete them!',
          id: 2
        },
        { text: 'Add new todos if you like!', id: 3 }
      ]
    };

    // binding methods
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  // Handler to add a todo
  public addTodo(todo: string): void {
    this.setState(
      (state): TodoItemArray => {
        let createTodo = { text: todo, id: new Date().getTime() };
        const todos = [...state.todos, createTodo];
        return { todos };
      }
    );
  }

  // Handler to remove a todo
  public removeTodo(id: number): void {
    this.setState(
      (state): TodoItemArray => {
        const todos = state.todos.filter((todos): boolean => id != todos.id);

        return { todos };
      }
    );
  }

  public render(): React.ReactElement {
    return (
      <div>
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    );
  }
}

export default TodoApp;

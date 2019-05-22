import React from 'react';
import Todo from './todo';
import styles from './todos.module.css';

interface TodoItem {
  text: string;
  id: number;
}

interface TodoItemInput {
  todos: TodoItem[];
  handleRemove: (id: number) => void;
}

const TodoList = ({ todos, handleRemove }: TodoItemInput) => {
  function renderList(): React.ReactElement | React.ReactElement[] {
    // check if there are todos -- provide useful message if no todos left
    if (todos.length > 0) {
      return todos.map(
        (todo): React.ReactElement => (
          <Todo todo={todo} remove={handleRemove} key={todo.id} />
        )
      );
    }
    return <p>No Todos remaining!</p>;
  }

  return (
    <div className={styles['allTodosBox']}>
      <p>
        <b>Your Todos:</b>
      </p>
      {renderList()}
    </div>
  );
};

export default TodoList;

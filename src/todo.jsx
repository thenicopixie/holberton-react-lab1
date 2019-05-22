import React from 'react';
import styles from './todos.module.css';

const Todo = ({ todo, remove }) => (
  <div className={styles["todoBox"]}>
    <p>

      <span
        onClick={() => {
          remove(todo.id)
        }}>
        <b className={styles["cancelX"]}>&nbsp;X </b>
      </span>
      {todo.text}
    </p>
  </div>
);

export default Todo;
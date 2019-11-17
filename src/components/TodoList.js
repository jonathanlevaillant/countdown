import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => {
          return (
            <tr key={todo.id}>
              <Todo {...todo} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoList;

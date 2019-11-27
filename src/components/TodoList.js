import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Tâches</th>
            <th>Dernière mise à jour</th>
            <th>Récurrence</th>
            <th>Compte à rebours</th>
            <th>Options</th>
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
      <Link to="/add">Ajouter une tâche</Link>
    </>
  );
};

export default TodoList;

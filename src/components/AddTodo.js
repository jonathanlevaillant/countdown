import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { addTodo } from '../actions/todos';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [recurrence, setRecurrence] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addTodo(text, recurrence));
    history.push('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Tâches</label>
        <input id="text" type="text" onChange={e => setText(e.target.value)} value={text} required />
        <br />
        <label htmlFor="recurrence">Récurrence</label>
        <input
          id="recurrence"
          type="number"
          onChange={e => setRecurrence(e.target.value)}
          value={recurrence}
          required
        />
        <br />
        <button type="submit">Ajouter une tâche</button>
      </form>
      <Link to="/">Revenir à la liste des tâches</Link>
    </>
  );
};

export default AddTodo;

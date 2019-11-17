import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../actions/todos';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addTodo(text));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Action</label>
      <input id="text" type="text" onChange={e => setText(e.target.value)} value={text} required />
      <button type="submit">Ajouter une action</button>
    </form>
  );
};

export default AddTodo;

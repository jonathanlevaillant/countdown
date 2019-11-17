import React from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo } from '../actions/todos';

const RemoveTodo = props => {
  const { id } = props;
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(removeTodo(id))}>
      Supprimer
    </button>
  );
};

export default RemoveTodo;

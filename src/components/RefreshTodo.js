import React from 'react';
import { useDispatch } from 'react-redux';

import { refreshTodo } from '../actions/todos';

const RefreshTodo = props => {
  const { id } = props;
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(refreshTodo(id))}>
      Rafraîchir
    </button>
  );
};

export default RefreshTodo;

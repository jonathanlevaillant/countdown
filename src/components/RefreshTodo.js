import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

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

RefreshTodo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RefreshTodo;

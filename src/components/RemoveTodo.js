import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

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

RemoveTodo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RemoveTodo;

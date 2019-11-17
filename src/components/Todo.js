import React from 'react';
import PropTypes from 'prop-types';

import RefreshTodo from './RefreshTodo';
import RemoveTodo from './RemoveTodo';

const Todo = props => {
  const { id, text, lastUpdate, recurrence } = props;

  return (
    <>
      <td>{text}</td>
      <td>{lastUpdate.toString()}</td>
      <td>{recurrence}</td>
      <td>
        <RefreshTodo id={id} />
        <RemoveTodo id={id} />
      </td>
    </>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  lastUpdate: PropTypes.object.isRequired,
  recurrence: PropTypes.number.isRequired,
};

export default Todo;

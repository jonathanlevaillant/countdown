import React from 'react';
import PropTypes from 'prop-types';

import RefreshTodo from './RefreshTodo';
import RemoveTodo from './RemoveTodo';
import useCountdown from '../utils/useCountdown';

const Todo = props => {
  const { id, text, lastUpdate, recurrence } = props;
  const countdown = useCountdown(lastUpdate, recurrence);

  return (
    <>
      <td>{text}</td>
      <td>{lastUpdate.toString()}</td>
      <td>{recurrence}</td>
      <td>{countdown.asSeconds()}</td>
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

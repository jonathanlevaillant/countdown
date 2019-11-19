import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import RefreshTodo from './RefreshTodo';
import RemoveTodo from './RemoveTodo';
import { getDuration } from '../utils/duration';

const Todo = props => {
  const { id, text, lastUpdate, recurrence } = props;
  const [countdown, setCountdown] = useState(getDuration(lastUpdate, recurrence));

  useEffect(() => {
    setCountdown(getDuration(lastUpdate, recurrence));

    const timer = setInterval(() => setCountdown(getDuration(lastUpdate, recurrence)), 1000);

    return () => clearInterval(timer);
  }, [lastUpdate, recurrence]);

  return (
    <>
      <td>{text}</td>
      <td>{lastUpdate.toString()}</td>
      <td>{recurrence}</td>
      <td>{countdown.humanize(true)}</td>
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

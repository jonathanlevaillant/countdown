import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import RefreshTodo from './RefreshTodo';
import RemoveTodo from './RemoveTodo';
import { getDuration } from '../utils/duration';
import { expireTodo } from '../actions/todos';

const Todo = props => {
  const { id, text, lastUpdate, recurrence } = props;
  const [countdown, setCountdown] = useState(getDuration(lastUpdate, recurrence));
  const [countdownIsOver, setCountdownIsOver] = useState(false);
  const dispatch = useDispatch();

  // Set and refresh the countdown every seconds
  useEffect(() => {
    setCountdown(getDuration(lastUpdate, recurrence));

    const timer = setInterval(() => setCountdown(getDuration(lastUpdate, recurrence)), 1000);

    return () => clearInterval(timer);
  }, [lastUpdate, recurrence]);

  // Check if the countdown is over
  useEffect(() => setCountdownIsOver(countdown.asSeconds() <= 0), [countdown]);

  // Expire todo when the countdown is over
  useEffect(() => {
    if (countdownIsOver) dispatch(expireTodo(id));
  }, [id, countdownIsOver, dispatch]);

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

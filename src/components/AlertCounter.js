import React from 'react';
import { useSelector } from 'react-redux';

const AlertCounter = () => {
  const counter = useSelector(state => state.todos.filter(todo => todo.hasExpired)).length;

  return <div>{counter}</div>;
};

export default AlertCounter;

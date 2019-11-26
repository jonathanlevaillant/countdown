import React from 'react';
import { useSelector } from 'react-redux';

import Status from './Status';

const StatusList = () => {
  const todos = useSelector(state => state.todos);

  return todos.map(todo => <Status key={todo.id} {...todo} />);
};

export default StatusList;

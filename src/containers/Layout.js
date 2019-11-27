import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTodoCountdown } from '../actions/todos';

const Layout = props => {
  const { children } = props;
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const timers = [];

  useEffect(() => {
    todos.forEach(todo => {
      timers.push(setInterval(() => dispatch(setTodoCountdown(todo.id, todo.countdown)), 1000));
    });

    return () => timers.forEach(clearInterval);
  }, [dispatch, timers, todos]);

  return children;
};

export default Layout;

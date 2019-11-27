import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshTodoCountdowns } from '../actions/todos';

const useRefreshTodoCountdowns = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => dispatch(refreshTodoCountdowns()), 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
};

export default useRefreshTodoCountdowns;

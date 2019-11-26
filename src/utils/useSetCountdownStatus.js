import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { expireTodo } from '../actions/todos';

const useSetCountdownStatus = (id, countdownIsOver) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (countdownIsOver) dispatch(expireTodo(id));
  }, [id, countdownIsOver, dispatch]);
};

export default useSetCountdownStatus;

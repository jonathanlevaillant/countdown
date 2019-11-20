export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REFRESH_TODO = 'REFRESH_TODO';
export const EXPIRE_TODO = 'EXPIRE_TODO';

let nextTodoId = 0;

export const addTodo = (text, recurrence) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
    lastUpdate: new Date(),
    recurrence: parseInt(recurrence, 10),
    hasExpired: false,
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

export const refreshTodo = id => {
  return {
    type: REFRESH_TODO,
    id,
    lastUpdate: new Date(),
    hasExpired: false,
  };
};

export const expireTodo = id => {
  return {
    type: EXPIRE_TODO,
    id,
    hasExpired: true,
  };
};

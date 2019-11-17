export const ADD_TASK = 'ADD_TASK';

export const addTask = name => {
  return {
    type: ADD_TASK,
    name,
  };
};

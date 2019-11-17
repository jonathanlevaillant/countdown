import { ADD_TASK } from '../actions/tasks';

const initialState = {
  tasks: [],
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default tasks;

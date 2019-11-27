import { ADD_TODO, REMOVE_TODO, REFRESH_TODO, REFRESH_TODO_COUNTDOWNS } from '../actions/todos';

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          lastUpdate: action.lastUpdate,
          recurrence: action.recurrence,
          countdown: action.countdown,
        },
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case REFRESH_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, lastUpdate: action.lastUpdate, countdown: todo.recurrence } : todo,
      );
    case REFRESH_TODO_COUNTDOWNS:
      return state.map(todo => ({ ...todo, countdown: todo.countdown > 0 ? todo.countdown - 1 : 0 }));
    default:
      return state;
  }
};

export default todos;

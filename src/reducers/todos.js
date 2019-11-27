import { ADD_TODO, REMOVE_TODO, REFRESH_TODO, SET_TODO_COUNTDOWN } from '../actions/todos';

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
        todo.id === action.id ? { ...todo, lastUpdate: action.lastUpdate, countdown: action.countdown } : todo,
      );
    case SET_TODO_COUNTDOWN:
      return state.map(todo => (todo.id === action.id ? { ...todo, countdown: action.countdown } : todo));
    default:
      return state;
  }
};

export default todos;

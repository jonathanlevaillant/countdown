import { ADD_TODO, REMOVE_TODO, REFRESH_TODO } from '../actions/todos';

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
        },
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case REFRESH_TODO:
      return state.map(todo => (todo.id === action.id ? { ...todo, lastUpdate: action.lastUpdate } : todo));
    default:
      return state;
  }
};

export default todos;

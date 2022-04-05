import { v4 } from 'uuid'
import {
  ADD_TODO,
  CLONE_TODO,
  DELETE_TODO,
  SET_TODOS,
  RESET_TODOS,
  TOGGLE_TODO,
  INCREMENT,
  DECREMENT,
} from './constants'

const globalStateReducer = (state, { type, value }) => {
  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        todos: value,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          {
            id: v4(),
            title: value.title,
            completed: value.completed,
          },
          ...state.todos,
        ],
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === value ? { ...t, completed: !t.completed } : t,
        ),
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== value),
      }
    case CLONE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...value,
            id: v4(),
          },
        ],
      }
    case RESET_TODOS:
      return {
        ...state,
        todos: [],
      }
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }

    default:
      return state
  }
}

export default globalStateReducer

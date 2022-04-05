import { useContext } from 'react'
import { DELETE_TODO, TOGGLE_TODO } from '../contexts/constants'
import { GlobalContext } from '../contexts/GlobalContext'

export default function TodoItem({ todo }) {
  const { dispatch, cloneTodo } = useContext(GlobalContext)

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <span>{todo.title}</span>
      <button
        onClick={() => {
          dispatch({
            type: TOGGLE_TODO,
            value: todo.id,
          })
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          cloneTodo(todo)
        }}
      >
        Clone
      </button>
      <button
        disabled={!todo.completed}
        onClick={() => {
          dispatch({ type: DELETE_TODO, value: todo.id })
        }}
      >
        Delete
      </button>
    </li>
  )
}

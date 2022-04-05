import { useContext } from 'react'
import { RESET_TODOS } from '../contexts/constants'
import { GlobalContext } from '../contexts/GlobalContext'

export default function TodosDetails() {
  const { todos, completedTodosLength, dispatch } = useContext(GlobalContext)

  return (
    <div>
      <h1>Todos Details</h1>
      <ul>
        <li>
          Total Todos : <span>{todos.length}</span>
        </li>
        <li>
          Completed Todos : <span>{completedTodosLength}</span>
        </li>
        <button
          onClick={() => {
            dispatch({ type: RESET_TODOS })
          }}
        >
          Reset Todos
        </button>
      </ul>
    </div>
  )
}

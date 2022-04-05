import { useContext, useMemo, useState } from 'react'
import { DECREMENT, INCREMENT } from '../contexts/constants'
import { GlobalContext } from '../contexts/GlobalContext'
import TodoItem from './TodoItem'

export default function TodosList() {
  const { todos, counter, dispatch } = useContext(GlobalContext)
  const [search, setSearch] = useState('')

  const filteredTodos = useMemo(
    () =>
      todos.filter(todo =>
        todo.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [todos, search],
  )

  return (
    <div>
      <div
        style={{
          paddingBottom: '10px',
        }}
      >
        <button
          onClick={() => {
            dispatch({
              type: INCREMENT,
            })
          }}
        >
          -1
        </button>
        {counter}
        <button
          onClick={() => {
            dispatch({
              type: DECREMENT,
            })
          }}
        >
          +1
        </button>
      </div>
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

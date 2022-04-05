import { useEffect, useMemo } from 'react'
import { createContext, useReducer } from 'react'
import { CLONE_TODO, SET_TODOS } from './constants'
import globalStateReducer from './reducer'

export const GlobalContext = createContext()

const initialState = {
  todos: [],
  counter: 0,
}

export default function GlobalContextProvider({ children }) {
  const [{ todos, counter }, dispatch] = useReducer(
    globalStateReducer,
    initialState,
  )

  // const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: SET_TODOS,
          value: data,
        })
      })
    // Immediately Invoked Function Expression (IIFE)
    // ;(async () => {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/todos?_limit=5',
    //   )
    //   const data = await response.json()
    //   setTodos(data)
    // })()
  }, [])

  // const addTodo = (title, completed) => {
  //   setTodos([
  //     {
  //       id: v4(),
  //       title,
  //       completed,
  //     },
  //     ...todos,
  //   ])
  // }

  // const toggleTodo = id => {
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed }
  //       }
  //       return todo
  //     }),
  //   )
  // }

  // const removeTodo = id => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  // const resetTodos = () => {
  //   setTodos([])
  // }

  const cloneTodo = todo => {
    dispatch({ type: CLONE_TODO, value: todo })
  }

  const completedTodosLength = useMemo(
    () => todos.filter(todo => todo.completed).length,
    [todos],
  )

  return (
    <GlobalContext.Provider
      value={{
        todos,
        completedTodosLength,
        counter,
        cloneTodo,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

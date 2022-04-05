import { useContext, useRef, useState } from 'react'
import { ADD_TODO } from '../contexts/constants'
import { GlobalContext } from '../contexts/GlobalContext'

export default function AddTodoForm() {
  const { dispatch } = useContext(GlobalContext)
  const titleRef = useRef()
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <h1>New Todo Form</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (titleRef.current.value.trim() !== '') {
            dispatch({
              type: ADD_TODO,
              value: {
                title: titleRef.current.value,
                completed: checked,
              },
            })
          }

          titleRef.current.value = ''
          setChecked(false)
          titleRef.current.focus()
        }}
      >
        <input type='text' placeholder='Add Todo' ref={titleRef} />
        <input
          type='checkbox'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

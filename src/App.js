import AddTodoForm from './components/AddTodoForm'
import TodosDetails from './components/TodosDetails'
import TodosList from './components/TodosList'
import GlobalContextProvider from './contexts/GlobalContext'

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <TodosDetails />
          <AddTodoForm />
        </div>
        <hr />
        <TodosList />
      </GlobalContextProvider>
    </div>
  )
}

export default App

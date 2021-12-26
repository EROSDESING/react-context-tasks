import { createContext, useReducer } from 'react'
import appReducer from './AppReducer'

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'title one',
      description: 'some description',
      done: 'false',
    },
    {
      id: '2',
      title: 'title two',
      description: 'some description two ',
      done: 'false ',
    },
  ],
}

export const GlobalContext = createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = (task) => {
    console.log(task)
    dispatch({ type: 'ADD_TASK', payload: { id: 1, title: 'nuevo' } })
  }
  return (
    <GlobalContext.Provider value={{ ...state, addTask }}>
      {children}
    </GlobalContext.Provider>
  )
}

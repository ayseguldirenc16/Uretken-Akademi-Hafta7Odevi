
import { useReducer } from 'react'
import './App.css'
import { MainContext } from './context/context'
import Calendar from './components/Calendar'
import reducer, {initialState} from './context/reducer'

function App() {
const data = useReducer(reducer, initialState)

  return (
    <>
      <MainContext.Provider value={data}>
        <Calendar></Calendar>

      </MainContext.Provider>
    </>
  )
}

export default App

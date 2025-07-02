import './App.css'
import { SimpleCounter } from './SimpleCounter/SimpleCounter'
import { ToggleButton } from './ToggleButton/ToggleButton'

const App = () => {
  

  return (
    <>
    <h1>Menestra de componentes</h1>
    <SimpleCounter initialNumber= {0}/>
    <ToggleButton/>
    </>
  )
}

export default App

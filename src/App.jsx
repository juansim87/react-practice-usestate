import './App.css'
import { SimpleCounter } from './components/SimpleCounter/SimpleCounter'
import { TextBox } from './components/TextBox/TextBox'
import { ToggleButton } from './components/ToggleButton/ToggleButton'

const App = () => {
  

  return (
    <>
    <h1>Menestra de componentes</h1>
    <SimpleCounter initialNumber= {0}/>
    <ToggleButton />
    <TextBox />
    </>
  )
}

export default App

import "./App.css";
import { ChangeColor } from "./components/ChangeColor/ChangeColor";
import { ShowHideButton } from "./components/ShowHideButton/ShowHideButton";
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter";
import { TaskList } from "./components/TaskList/TaskList";
import { TextBox } from "./components/TextBox/TextBox";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";

const App = () => {
  return (
    <>
      <div className="app">
        <h1>Menestra de componentes</h1>
        <SimpleCounter initialNumber={0} />
        <ToggleButton />
        <TextBox />
        <ShowHideButton />
        <ChangeColor />
        <TaskList />
      </div>
    </>
  );
};

export default App;

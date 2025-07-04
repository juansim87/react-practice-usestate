import "./App.css";
import { ChangeColor } from "./components/ChangeColor/ChangeColor";
import { CheckBox } from "./components/CheckBox/CheckBox";
import { EditableText } from "./components/EditableText/EditableText";
import { LikeButton } from "./components/LikeButton/LikeButton";
import { ShowHideButton } from "./components/ShowHideButton/ShowHideButton";
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter";
import { Tabs } from "./components/Tabs/Tabs";
import { TaskList } from "./components/TaskList/TaskList";
import { TextBox } from "./components/TextBox/TextBox";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { ToggleImage } from "./components/ToggleImage/ToggleImage";

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
        <Tabs />
        <CheckBox />
        <ToggleImage />
        <LikeButton />
        <EditableText />
      </div>
    </>
  );
};

export default App;

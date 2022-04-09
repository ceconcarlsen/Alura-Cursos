import "../App.css";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";

// generate unique id's for css
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;

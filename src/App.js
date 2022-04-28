import Button from "./Button";
import style from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={style.title}>Welcome back!!!!!!!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;

//독립적으로 나눌 수 있어서 편하긴 하다
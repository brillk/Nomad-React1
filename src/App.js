import Button from "./Button";
import style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);
  useEffect(() => {
    console.log("Call the APi");
  });
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

//독립적으로 나눌 수 있어서 편하긴 하다
/*
useEffect는 코드가 딱 한번만 실행하도록 보호해준다
*/
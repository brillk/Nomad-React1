import Button from "./Button";
import style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
  const onChange = event => setKeyword(event.target.value);
  console.log("i ran all the time");
  useEffect(() => {
    console.log("Call the APi");
  }, []);
  useEffect(() => { // 특정한 부분을 실행하는 것을 세분화하고 조건문을 넣어 
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
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

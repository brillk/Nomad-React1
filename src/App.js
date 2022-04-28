import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = event => setToDo(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } //toDo 그러니까 state를 직접 바꾸면 안되고, func을 이용해 바꿔야 한다 무조건
    setToDos(currentArray => [toDo, ...currentArray]); // ...는 array에 있는 값을 합친다
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To do</button>
      </form>
    </div>
  );
}

export default App;

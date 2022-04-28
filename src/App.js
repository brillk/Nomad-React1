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
    setToDo(""); //<- 이 값은 우리가 저장한 data를 갖고 있다
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
      <hr />
      <ul>
        {" "}
        {/*map은 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌*/}
        {toDos.map(
          (
            item,
            index 
            /*리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에
            key를 넣어 고유하게 만들어줘야함
            map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
             */
          ) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;

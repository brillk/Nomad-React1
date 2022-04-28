import { useEffect, useState } from "react";

function Hello() {
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  //컴포넌트가 destroy될 때도 코드를 실행할 수 있다
  //-> return으로 함수를 만들어주면 된다.
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

//독립적으로 나눌 수 있어서 편하긴 하다
/*
useEffect는 코드가 딱 한번만 실행하도록 보호해준다

정리(clean-up)를 이용하는 Effects

위에서 정리(clean-up)가 필요하지 않은 side effect를 보았지만, 
정리(clean-up)가 필요한 effect도 있습니다. 
외부 데이터에 구독(subscription)을 설정해야 하는 경우를 생각해보겠습니다. 
이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 
매우 중요합니다.

effect에서 함수를 반환하는 이유는 무엇일까요?
이는 effect를 위한 추가적인 정리(clean-up) 메커니즘입니다. 
모든 effect는 정리를 위한 함수를 반환할 수 있습니다.

React가 effect를 정리(clean-up)하는 시점은 정확히 언제일까요?
React는 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행합니다. 
하지만 위의 예시에서 보았듯이 effect는 한번이 아니라 
렌더링이 실행되는 때마다 실행됩니다. 
React가 다음 차례의 effect를 실행하기 전에 이전의 렌더링에서 
파생된 effect 또한 정리하는 이유가 바로 이 때문입니다.

*/

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Page from "./routes/Page";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Page />
        </Route>
        <Route path="/"> {/* 새로운 url을 쉽게 만들었다 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
/*link는 새로고침없이도 다른 페이지로 갈 수 있다 제목에 a태그를 붙여 
./movie로 이동할 순 있지만 새로고침을 해야 되서 효율이 안 좋다 

*/
export default App;

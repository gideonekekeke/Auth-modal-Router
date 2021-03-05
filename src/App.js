import logo from "./logo.svg";
import "./App.css";
import Homescreen from "./component/Homescreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainFile from "./component/MainFile";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Homescreen} />
          <Route path="/main/:id" component={MainFile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

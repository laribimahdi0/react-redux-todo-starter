import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import EditTask from "./components/EditTask";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <Router>
        <Navbar isLogin={user.isLoged} />
        <Switch>
          <Route exact path={"/"}>
            <Login />
          </Route>
          <Route exact path={"/task"}>
            <Tasks />
          </Route>
          <Route path={"/task/:id"}>
            <EditTask />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

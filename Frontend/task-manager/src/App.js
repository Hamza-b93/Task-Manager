import "./styles.css";
import Index from "./components/Index";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Test from "./components/Test";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import GroupsIndexContainer from "./containers/GroupsIndexContainer";
import GroupFormContainer from "./containers/GroupFormContainer";


function App() {
  return (
    <div className="App">
      <Router>
        <nav className="text-center bg-blue-900 text-white-100 p-4">
        <NavLink className="inLine-block px-4 py-2" to="/">Groups</NavLink>
      <NavLink className="inLine-block px-4 py-2" to="/groups/new"> New Group</NavLink>
      </nav>
        <Switch>
          <Route exact path="/">
            Groups
    </Route>
          <Route path="/groups/new">New Group</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

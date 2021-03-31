import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import GroupsIndexContainer from "./containers/GroupsIndexContainer";
import GroupFormContainer from "./containers/GroupFormContainer";
import NewSessionContainer from "./containers/NewSessionContainer";
import GroupShowContainer from "./containers/GroupShowContainer";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="text-center bg-blue-900 text-yellow-100 p-4">
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/"
          >
            Subjects
          </NavLink>
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/groups/new"
          >
            New Subject
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <GroupsIndexContainer />
          </Route>
          <Route path="/groups/new" component={GroupFormContainer} />
          <Route path="/groups/:groupId/sessions/new" component={NewSessionContainer} />
          <Route path="/groups/:groupId" component={GroupShowContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
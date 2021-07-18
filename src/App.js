import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import GroupsIndexContainer from "./containers/GroupsIndexContainer";
import GroupFormContainer from "./containers/GroupFormContainer";
import NewSessionContainer from "./containers/NewSessionContainer";
import GroupShowContainer from "./containers/GroupShowContainer";
import "tailwindcss/tailwind.css";

//Main page that renders the res of the componets, we have our nav bar and then the rest of the components
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
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
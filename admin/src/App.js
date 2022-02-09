import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faUsers,
  faHome,
  faFolder,
  faCreditCard,
  faCog,
  faBars,
  faEye,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./components/Dashboard";
import Payments from "./components/Payments";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import InvestorPosts from "./components/investorPosts";
import EntrepreneurPosts from "./components/entrepreneurPosts";
import Beneficiaries from "./components/Beneficiaries";
import Mentors from './components/Mentors'
import Administrators from './components/Administrators'
import Packages from "./components/Packages";
import AddMentor from "./components/AddMentor";
import AddAdministrator from "./components/AddAdministrator";

library.add(
  fab,
  faUsers,
  faHome,
  faFolder,
  faCreditCard,
  faCog,
  faBars,
  faEye,
  faEdit,
  faTrash
);

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/beneficiaries" component={Beneficiaries} />
          <Route exact path="/mentors" component={Mentors} />
          <Route exact path="/create-mentors" component={AddMentor} />
          <Route exact path="/administrators" component={Administrators} />
          <Route
            exact
            path="/create-administrators"
            component={AddAdministrator}
          />
          <Route exact path="/investors" component={Mentors} />
          <Route exact path="/packages" component={Packages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

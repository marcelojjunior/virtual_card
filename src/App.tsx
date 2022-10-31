import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>        
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/:name" children={<Profile />} />
        </Switch>
    </Router>
  );
}

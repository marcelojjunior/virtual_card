import {
  BrowserRouter as Router,
  Switch,
  Route
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

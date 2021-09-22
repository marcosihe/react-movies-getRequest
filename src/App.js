import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/">
        <MoviesList />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;

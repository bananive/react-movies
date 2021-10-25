import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

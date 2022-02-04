// Exact match routes: you must put the word exact before the path (Routes) when you're adding components.
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* 03. Add exact to no interfere with the other paths */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* 02. Add the Create component and import it */}
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

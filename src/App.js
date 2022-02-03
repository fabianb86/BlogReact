// The react router : To manage different pages in the website. Install react router v 5
import Navbar from './Navbar';
import Home from './Home';
// 01. import browserRouter, Route, Switch
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    // 02. Surround the application with the router component
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* 03. Set a switch component to makes sure that only one route shows at any one time */}
          <Switch>
            {/* 04. Set the pages. Each one with route*/}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

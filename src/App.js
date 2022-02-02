// Adding Styles: Add css styles to the components. Use the Index.css to this little project

import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

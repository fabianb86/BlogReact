// Multiple Components: App.js is the root component. All commponents created are nested to this one.

import './App.css';
// 04. Import the Navbar component
import Navbar from './Navbar';
// 07. Import Home component
import Home from './Home';


function App() {
  return (
    <div className="App">

      {/* 05. Nest the Navbar here */}
      <Navbar />

      <div className="content">
        {/* 08. Nest the home component here */}
        <Home />
      </div>
    </div>
  );
}

export default App;

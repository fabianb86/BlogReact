// Router Links: In order to manage the requests from the browser and not from the server

// 01. Import Link component from router dom package
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        {/* 02. Replace a for link */}
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
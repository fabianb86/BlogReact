// 01. Create this file. The navbar component

// 02. Type sfc to set a "Stateless Functional Component"
const Navbar = () => {
  return ( 
    // 03. Set a navbar template
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>

        {/* 02. An Example of using Dynamic value here, setting a style object here
        <a href="/create" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }} >New Blog</a> */}

      </div>
    </nav>
  );
}

export default Navbar;
// Fetching data with useEffect: Set a get request to fetch all blogs

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // 01. Set null to the initial state
  const [blogs, setBlogs] = useState(null);

  useEffect(() =>{
    // 02. Fetching data
    fetch('http://localhost:8000/blogs')
      .then(res =>{
        return res.json();
      })
      .then((data) =>{
        setBlogs(data);
      });
  }, []);

  return ( 
    <div className="home">
      {/* 03. Combat the null error with the "and" conditional */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
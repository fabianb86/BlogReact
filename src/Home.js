// Conditional Loading Message: Set a message to the user while we fetch the data

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  // 01. Set the state of pending
  const [isPending, setIsPending] = useState(true);

  useEffect(() =>{
    fetch('http://localhost:8000/blogs')
      .then(res =>{
        return res.json();
      })
      .then((data) =>{
        setBlogs(data);
        // 03. When we fetch the data, set the isPending "false"
        setIsPending(false);
      });
  }, []);

  return ( 
    <div className="home">
      {/* 02. Set a conditional logical template to say when only isPending is true, will display the message */}
      { isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
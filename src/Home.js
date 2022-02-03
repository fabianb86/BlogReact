// Handiling fetch errors: Show an error to the user if anything goes wrong with the fetching of data

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // 03. Set the initial state for the error
  const [error, setError] = useState(null);

  useEffect(() =>{
    fetch('http://localhost:8000/blogs')
      .then(res =>{
        // 02. if statement to check if the response is not ok (false)
        if(!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) =>{
        setBlogs(data);
        setIsPending(false);
        // 05. If is not an error
        setError(null);
      })
      // 01. Catch the error
      .catch(err =>{
        setIsPending(false);
        setError(err.message);
      })
  }, []);

  return ( 
    <div className="home">
      {/* 04. Show the error in the browser */}
      { error && <div>{ error }</div> }
      { isPending && <div>Loading... </div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    </div>
  );
}

export default Home;
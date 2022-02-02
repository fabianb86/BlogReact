// Outputting lists: How to show all the items cycling each one.

// 01. Import the useState Hook
import { useState } from "react";

const Home = () => {

  // 02. Set the useState, it means, the initial state (initial blogs)
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);
  
  return ( 
    <div className="home">
      {/* 03. Using JavaScript, with the map method cycle all the blogs to show in this template */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
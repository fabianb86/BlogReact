// useEffect: This hook runs a function every render of the components

// 01. Import useEffect
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  // 04. Another state
  const [name, setName] = useState('mario');

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  
  // 02. Set useEffect to 
  useEffect(() =>{
    console.log('use effect ran');
    console.log(name);
    // 03. If you put an empty array as a dependency as a second parameter, the effect will run just once after the intial render
    // 06. If you put the name as a dependency, the effect will apply just to the name state
  }, [name]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
      {/* 05. Button to change name */}
      <button onClick={() => setName('luigi')}>Change Name</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;
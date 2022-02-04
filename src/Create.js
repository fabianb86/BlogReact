// Making a POST request: To send the data tracked to the database

import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  // 02. A state for loading the new post request
  const [ isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    // 03. Handle the Loading
    setIsPending(true);

    // 01. Make a fetch api
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() =>{
      console.log('new blog added')
      // 04. Loading complete
      setIsPending(false);
    })
  }

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {/* 05. Surround the button and set the loading */}
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;
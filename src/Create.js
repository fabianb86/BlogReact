// Submit Events: To handle the event of submit the form and do something with this data

import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  // 01. Create the function handlesubmit
  const handleSubmit = (e) => {
    // 03. Prevent the automatic refresh of the page
    e.preventDefault();
    // 04. Create the blog object
    const blog = { title, body, author };

    console.log(blog);
  }

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* 02. Attach the handlesubmit function */}
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
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
// Controlled Inputs: To manage the forms. The values that an user puts into a form.

import { useState } from "react";

const Create = () => {
  // 02. Set states to track the data of the input fields
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* 01. Create the form */}
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          // 03. Associate the value of the state to the input
          value={title}
          //04. Change the new value of the input
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          // 03. Associate the value of the state to the input
          value={body}
          //04. Change the new value of the input
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          // 03. Associate the value of the state to the input
          value={author}
          //04. Change the new value of the input
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        {/* 05. To verfy */}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create;
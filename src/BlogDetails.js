// Delete Request: How to delete a blog

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  // 03. Set history hook
  const history = useHistory();

  // 02. Function associated to delete button
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      // 04. Redirect to homepage
      history.push('/');
    })
  }

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          {/* 01. Add delete button */}
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;
// Reusing Custom Hook: To fetch the information of each blog

import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  // 01. Import and set the route for each id
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return ( 
    <div className="blog-details">
      {/* 02. Set the template */}
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;
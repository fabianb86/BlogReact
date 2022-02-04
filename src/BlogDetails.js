// Route parameter: To show different pages at the same component, like every blog by id

import { useParams } from "react-router-dom";

// 01. Create this file to the blog details component
const BlogDetails = () => {

  // 03. Grab the id of the blog
  const { id } = useParams();


  return ( 
    <div className="blog-details">
      <h2>Blog Details - { id }</h2>
    </div>
  );
}
export default BlogDetails;
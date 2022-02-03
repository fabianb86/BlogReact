// Props: Let see how to make use of pieces of components to be reusable in different positions or different places.
// In other words, props are a way to pass data from a parent component into a child component

// 01. Create this file BlogList.js to house the blog list as an independent and reusable component

// 02. Set the BlogList component
// 04. Pass the properties as an argument of the function directly | Second way
const BlogList = ({ blogs, title }) => {
  
  // 05. Access to the data of blogs stored at home.js. You must put the word "props" in the argument | First way
  // const blogs = props.blogs;
  // const title = props.title;

  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
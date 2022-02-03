// Functions as props: Delete an item

// 04. Pass the handleDelete function as a prop
const BlogList = ({ blogs, title, handleDelete}) => {

    return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          {/* 01. Create a button to delete a blog with an onClick event */}
          <button onClick={() => handleDelete(blog.id)} >Delete Blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
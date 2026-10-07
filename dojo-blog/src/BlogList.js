const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <div className="blog-info">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
          <button className="Delete_Button" onClick={() => handleDelete(blog.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
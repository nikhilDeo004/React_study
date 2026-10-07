import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error, setData: setBlogs } = useFetch('http://localhost:8000/blogs');

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="Home">
      {/* LEFT: big heading */}
      <div className="home-left">
        <h1>Home Page</h1>
      </div>

      {/* RIGHT: boxes stacked */}
      <div className="home-right">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}

        {blogs && (
          <>
            <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter(b => b.author === 'mario')} title="Mario's Blogs !" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter(b => b.author === 'yoshi')} title="Yoshi's Blogs !" handleDelete={handleDelete} />
          </>
        )}

        <button onClick={() => setName('luigi')}>Change name</button>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Home;
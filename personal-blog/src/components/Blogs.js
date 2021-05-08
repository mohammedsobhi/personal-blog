import Blog from "../components/Blog";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-title">
        <hr />
        <h2>Blogs</h2>
      </div>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default Blogs;

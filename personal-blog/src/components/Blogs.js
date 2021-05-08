import Blog from "../components/Blog";
import Tag from "../components/Tag";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-title">
        <hr />
        <h2>Blogs</h2>
      </div>
      <Tag />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default Blogs;

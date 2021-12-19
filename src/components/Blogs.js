import useFetch from "../hooks/useFetch";
import Blog from "../components/Blog";
import Tag from "../components/Tag";

const Blogs = () => {
  const { data, isLoading, error } = useFetch(
    "https://my-json-server.typicode.com/mohammedsobhi/my-blogs-db/blogs"
  );

  return (
    <div className="blogs-container">
      <div className="blogs-title">
        <hr />
        <h2>Blogs</h2>
      </div>
      <Tag />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div>
          {data.map((blog) => (
            <Blog
              key={blog.id}
              title={blog.title}
              tags={blog.tags}
              date={blog.date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;

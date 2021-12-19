const Blog = ({ title, tags, date }) => {
  return (
    <div className="blog">
      <h3 className="blog-title">{title}</h3>
      <span className="blog-date">{date}</span>
      <ul className="tags">
        {tags.map((tag) => (
          <li className="tag" key={tag.id}>
            {tag.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

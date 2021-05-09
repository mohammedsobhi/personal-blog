const Blog = (props) => {
  const title = props.title;
  const tags = props.tags;
  const date = props.date;

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

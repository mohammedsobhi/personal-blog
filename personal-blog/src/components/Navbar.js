const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sobhi's Blog</h1>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            email
          </a>
        </li>
      </ul>
      <button>new</button>
    </nav>
  );
};

export default Navbar;

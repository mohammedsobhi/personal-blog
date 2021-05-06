import Github from "../assets/logo-github.svg";
import Twitter from "../assets/logo-twitter.svg";
import LinkedIn from "../assets/logo-linkedin.svg";

const SocialMedia = () => {
  return (
    <section className="social-media">
      <p>reach me on: </p>
      <ul>
        <li>
          <a href="/">
            <img src={Github} alt="github logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={Twitter} alt="twitter logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={LinkedIn} alt="linkedin logo" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialMedia;

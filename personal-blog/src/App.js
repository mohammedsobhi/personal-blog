import "./App.css";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";

function App() {
  const title = "fdf project";

  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <div className="content">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default App;

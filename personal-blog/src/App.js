import "./App.css";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <SocialMedia />
      </header>
      <main>
        <Blogs />
      </main>
    </div>
  );
}

export default App;

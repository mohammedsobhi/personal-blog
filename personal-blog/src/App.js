import Navbar from "./components/Navbar";

function App() {
  const title = "fdf project";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default App;

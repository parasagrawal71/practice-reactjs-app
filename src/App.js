import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav
          style={{
            borderBottom: "solid 1px lightgrey",
            padding: "1rem",
            display: "flex",
            gap: 20,
            backgroundColor: "#ccc",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

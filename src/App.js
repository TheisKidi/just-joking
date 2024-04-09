import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Search from "./components/Search/Search";
import "./App.css";
import "./Variables.css";

function App() {
  return (
    <div>
      <div className="container">
        <div>
          <nav className="nav-bar">
            <span>Just Joking</span>
            <Link to="/" className="nav-item">
              Random
            </Link>
            <Link to="/Favorites" className="nav-item">
              Favorites
            </Link>
            <Link to="/Search" className="nav-item">
              Search
            </Link>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import FoodList from "./components/FoodList";
import AddFood from "./components/AddFood";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Food Corner
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foods">
                  FoodList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food">
                  AddFood
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<FoodList />} />
        <Route path="/food" element={<AddFood />} />
      </Routes>
    </Router>
  );
};

export default App;

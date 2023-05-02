import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from "react-router-dom";

import AddPortadaJuego from "./Component/add-PortadaJuegol.component";
import PortadaJuegoList from "./Component/PortadaJuego-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Routes>
            <Route path="/"   element={<PortadaJuegoList />} />
            <Route path="add" element={<AddPortadaJuego />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
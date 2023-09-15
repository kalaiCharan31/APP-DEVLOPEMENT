import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/r" element={<Register/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;

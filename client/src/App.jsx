import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </>
  )
}

export default App

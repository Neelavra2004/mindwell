import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Open from "./Pages/Open"
import Home from "./Pages/Home"
import Login from "./Pages/login"
import Appointment from "./Pages/Appointment"
import Playlist from "./Pages/Playlist"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/meditation" element={<Playlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    
    
  );
}

export default App

import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home_Page";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

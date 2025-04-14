import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, Container, Containercard, Experience } from "./components";
import Forms from "./pages/forms/forms";

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Container />
              <Containercard />
              <Experience />
            </>
          } />
          <Route path="/forms" element={<Forms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, Container, Containercard, Experience, AnimatedProjectCards } from "./components";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import DarkModeToggle from "./components/DarkMode/DarkModeToggle";
import Statistics from "./components/statistics/Statistics";
import Certifications from "./components/certifications/certifications";
import './App.css';
import Infos from "./components/infos/infos";

// Lazy load Forms for better performance
const Forms = lazy(() => import("./pages/forms/forms"));

const App = () => {
  return (
    <Router>
      <div className="App">
        <ScrollProgress />
        <DarkModeToggle />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Container />
              <Containercard />
              <Statistics />
              <Experience />
              <Certifications />
              <AnimatedProjectCards />
              <Infos />
            </>
          } />
          <Route 
            path="/forms" 
            element={
              <Suspense fallback={<div className="loading-container">Chargement...</div>}>
                <Forms />
              </Suspense>
            } 
          />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;

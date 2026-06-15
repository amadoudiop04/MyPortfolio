import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, Container, Containercard, Experience, AnimatedProjectCards } from "./components";
import BackToTop from "./components/BackToTop/BackToTop";
import Statistics from "./components/statistics/Statistics";
import Certifications from "./components/certifications/certifications";
import Infos from "./components/infos/infos";

// Lazy load pages for better performance
const Forms = lazy(() => import("./pages/forms/forms"));
const ProjectsPage = lazy(() => import("./pages/projects/projects"));

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
<Navbar />
        <main id="main-content" tabIndex={-1}>
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
              path="/projects"
              element={
                <Suspense fallback={<div className="loading-container">Loading...</div>}>
                  <ProjectsPage />
                </Suspense>
              }
            />
            <Route
              path="/forms"
              element={
                <Suspense fallback={<div className="loading-container">Loading...</div>}>
                  <Forms />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;

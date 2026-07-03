import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Footer, Navbar, Container, Containercard, Experience, AnimatedProjectCards, SectionNav } from "./components";
import BackToTop from "./components/BackToTop/BackToTop";
import Statistics from "./components/statistics/Statistics";
import Certifications from "./components/certifications/certifications";
import Infos from "./components/infos/infos";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Forms = lazy(() => import("./pages/forms/forms"));
const ProjectsPage = lazy(() => import("./pages/projects/projects"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
      <p className="text-slate-400 text-sm font-medium tracking-wide">Loading…</p>
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="App min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <div key={location.pathname} className="page-enter">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Container />
                  <Containercard />
                  <Statistics />
                  <Experience />
                  <Certifications />
                  <AnimatedProjectCards />
                  <Infos />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <ProjectsPage />
                </Suspense>
              }
            />
            <Route
              path="/forms"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Forms />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <SectionNav />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

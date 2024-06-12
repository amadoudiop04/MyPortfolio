import React from "react";
import { Footer, Navbar, Container, Containercard, Experience} from "./components";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Containercard />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;

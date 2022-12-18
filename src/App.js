import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/education">
        <Education />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Footer />
    </div>
  );
}

export default App;

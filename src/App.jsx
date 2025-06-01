import { useState } from "react";
import "./index.css";

import About from "./portfolio/About";
import Contact from "./portfolio/Contact";
import Navbar from "./portfolio/Navbar";
import Header from "./portfolio/Header";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Projects";
import ScrollToTop from "./portfolio/ScrollToTop";
// import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <Header />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
      <h1 className="text-red-500">hello</h1>
    </>
  );
}

export default App;

// Welcome.jsx
import { Head, Link } from "@inertiajs/react";
import About from "./portfolio/About";
import Contact from "./portfolio/Contact";
import Navbar from "./portfolio/Navbar";
import Header from "./portfolio/Header";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Projects";
import ScrollToTop from "./portfolio/ScrollToTop";

export default function Welcome() {
    return (
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
      );
}

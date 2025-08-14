import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <Router>
          <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Mister InfoSec</h1>
              <nav className="space-x-4">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/about" className="hover:text-blue-600">About</Link>
                <Link to="/services" className="hover:text-blue-600">Services</Link>
                <Link to="/contact" className="hover:text-blue-600">Contact</Link>
              </nav>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-12">
            <p className="mb-2">© 2025 Mister InfoSec. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </footer>
        </Router>
      </div>
    </div>
  );
}

import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/title/Title";
import Nav from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import What from "./pages/what/What";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import { LanguageProvider } from "./translations/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Router>
          <Title />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what" element={<What />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;

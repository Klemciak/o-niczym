import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/title/Title";
import Nav from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/what" element={<What />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import HomePage from "./HomePage";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import EmailSended from "./EmailSended";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/EmailSended" element={<EmailSended />} />
      </Routes>
    </div>
  );
}

export default App;

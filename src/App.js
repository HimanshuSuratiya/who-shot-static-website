import React from 'react'
import Landing from './Components/Landing Page Components/Landing';
import { Routes, Route, Navigate } from "react-router-dom";
import Aboutus from "./Components/About us/Aboutus";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import Contactus from "./Components/Contact us/Contactus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
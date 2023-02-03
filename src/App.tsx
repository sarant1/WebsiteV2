import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/home'
import { Contactme } from './pages/contact'
import { Blog } from './pages/blog';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contactme />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;

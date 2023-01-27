import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/home'
import { Contactme } from './pages/contact'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contactme />} />
    </Routes>
  );
}

export default App;

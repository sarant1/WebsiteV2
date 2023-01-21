import React from 'react';
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Footer } from './components/footer'
import { FileUpload } from './components/fileuploader'


function App() {
  return (
    <div className="font-poppins bg-slate-400">
      <Navbar />
      <Hero />
      <FileUpload />
      <Footer />
    </div>
  );
}

export default App;

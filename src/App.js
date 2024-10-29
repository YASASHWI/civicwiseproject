import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Content from './components/Content';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Slider />
        <Content />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;

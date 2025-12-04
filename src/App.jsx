import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Slider from './components/Slider';


const App = () => {
  return (
    <>
     <Navbar />
     <Hero/>
     <Presentation/>
     <Slider/>
    </>
  );
}

export default App

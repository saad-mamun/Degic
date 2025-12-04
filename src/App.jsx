import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Slider from './components/Slider';
import Video from './components/video';
import Time from './components/Time';


const App = () => {
  return (
    <>
     <Navbar />
     <Hero/>
     <Presentation/>
     <Slider/>
     <Video/>
     <Time/>
    </>
  );
}

export default App

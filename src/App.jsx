import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Slider from './components/Slider';
import Video from './components/Videos';
import Time from './components/Time';
import Boom from './components/Boom';


const App = () => {
  return (
    <>
     <Navbar />
     <Hero/>
     <Presentation/>
     <Slider/>
     <Video/>
     <Time/>
     <Boom/>
    </>
  );
}

export default App

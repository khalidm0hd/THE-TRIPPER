import React from 'react';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Astro from './components/Astro';
import Activities from './components/Activities';


function App() {
  return (
    <div>
      <Navbar />
      <Astro />
      <Activities />
    </div>
  )
}

export default App;

import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Astro from '../components/Astro';
import './home.css'
import logo from '../assets/logo.jpg'



const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className='container'>
          <div className='loading'></div>
        </div>
      ) : (
        <div>
          <img src={logo} className='logo' />
          <Navbar />
          <Astro />
        </div>
      )}
    </div>
  );
};


export default Home
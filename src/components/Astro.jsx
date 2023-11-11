import React from 'react'
import angleeVideo from '../assets/anglee.mp4'
import './astro.css'
import { FiChevronDown } from "react-icons/fi";


const Astro = () => {
  return (
    <div className='time'>
        <video autoPlay loop muted id="video">
            <source src={angleeVideo} type='video/mp4' />
        </video>
        <a href='#About'><FiChevronDown className='down-icon' /></a>
        <div className='over'>
            <h1>plan your trip with the tripper</h1>
        </div>
        <div className='money'>
        <h2 id='About'>about</h2>
        <p> <p>The Tripper is a leading travel agency based in Thailand, specializing in providing seamless travel booking experiences to customers through online<br /> and offline platforms, including Twitter, Tiktok, WhatsApp. The agency offers a wide range of travel services, including hotel bookings<br /> tours and activities, flight bookings, complete holiday packages, domestic activities, car rental, and more.<br />
 The Tripper is committed to providing its customers with convenient booking solutions for all their travel needs.<br /> The agency has a deep understanding of local and international travel needs, preferences,<br /> gained through extensive experience in the travel industry.</p></p>
        </div>
    </div>
  )
}

export default Astro;
import React from 'react'
import './activities.css'
import logo from '../assets/tripper.jpg'
import Typed from 'react-typed';
import {BsInstagram, BsWhatsapp, BsSnapchat} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'



const Activities = () => {
  return (
    <div className='space'>
      <h2 id="activities">activities</h2>
      <img src={logo} alt="" className='live'/>
      <p>our website will soon be upgraded with new features we're in  <Typed
                strings={[
                     'the',
                    'process!']}
                    typeSpeed={120}
                    backSpeed={150}
                    loop >
                </Typed></p>
                <div className='coin'>
                  <h2 id='contact'>contact</h2>
                </div>
                  <button className='social-media'>
                  <a href='https://www.instagram.com/'  className='instagram'>  <BsInstagram /></a>
                    </button>
                    <button className='social-media'>
                    <a href='https://wa.me/0066832412660'   className='whatsapp' target="_blank">  <BsWhatsapp /></a>
                    </button>
                    <button className='social-media'>
                    <a href='https://www.snapchat.com/'   className='snapchat' target="_blank">  <BsSnapchat /></a>
                    </button>
                    <button className='social-media'>
                    <a href='https://www.tiktok.com/en/'   className='tiktok' target="_blank">  <FaTiktok /></a>
                    </button>
                    <div className='faith'>
                    <h2>contact us on social media</h2>
                    </div>
                    <div className='hope'>
                    <span>© 2023 The tripper. All rights reserved.</span>
                    </div>
    </div>
  )
}

export default Activities;






/* 
<link>

Compare and book cheap flights from anywhere, to thailand




*/
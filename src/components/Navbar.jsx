import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import './navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <a href=""><h1>the<span> tripper</span></h1></a>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="" style={{ color: 'aqua' }}>home</a></li>
                <li><a href="#About">about</a></li>
                <li><a href="#activities">activities</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            <div className='safe' onClick={handleClick}>  
            {click ? (<AiFillCloseCircle size={20} style={{color: 'white'}} />) : (<FaBars size={20} style={{color: 'white'}} />)}
        </div>
    </div>
  )
}

export default Navbar;


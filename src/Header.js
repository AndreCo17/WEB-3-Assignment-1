import React from 'react'
import './css/Header.css'
import { Link } from 'react-router-dom';
import About from './About.js';

function Header() {
    return (
        <div className="header-panel panels">
            <div className="head-content" >
            <About/>
            <Link to="/"><img className="logo-image" src="https://www.icegif.com/wp-content/uploads/running-icegif-20.gif" alt="corgi" /></Link>
            </div>
        </div>
    )
}
export default Header;

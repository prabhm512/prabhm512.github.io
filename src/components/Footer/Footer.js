import React from 'react';
import './css/Footer.css';

// Images
import gmail from '../assets/Gmail_Icon.png'

function Footer() {
    return (
        <footer>
            <span className="footer-email"><h5><img src={gmail} width="40px" height="30px" alt="gmail"/> prabhm512@gmail.com</h5></span>
        </footer>
    )
}

export default Footer;
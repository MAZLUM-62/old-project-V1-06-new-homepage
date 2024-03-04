// Header.js
import React from 'react';

import './footer.css';  

const Footer = () => {
  return (
    <div className='footer-main' >
        <div className='footer-content'>  
            <h2>Rechtliches</h2>  
            <ul>
                <li><a className="footer-link" href='/datenschutz'>Datenschutz</a></li>
                <li><a className="footer-link" href='/impressum'>Impressum</a></li>
                <li><a className="footer-link" href='/agb'>AGB</a></li>
            </ul>
        </div>

        <div className='footer-content'>  
            <h2>Links</h2>  
            <ul>
                <li><a className="footer-link" href='/'>Home</a></li>
                <li><a className="footer-link" href='/faq'>FAQ</a></li>
                <li><a className="footer-link" href='/team'>Team</a></li>
            </ul>
        </div>

        <div className='footer-content'>  
            <h2>Kooperationen</h2>  
            <ul>
                <li><a className="footer-link" href='/'>Elgato</a></li>
                <li><a className="footer-link" href='/'>Twitch</a></li>
            </ul>
        </div>
        <p class="copyright">&copy; 2023 Central-V - Designed by .MAZO</p>
    </div>
  );
};

export default Footer;

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (

<footer class="footer">
  <div class="footer-container">
    <div class="footer-left">
      <p>&copy; 2025 All Rights Reserved</p>
    </div>
    <div class="footer-center">
      <ul>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
    <div class="footer-right">
      <ul class="social-links">
        <li><a href="/" class="social-icon"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" alt="Facebook" /></a></li>
        <li><a href="/" class="social-icon"><img src="https://cdn-icons-png.flaticon.com/256/124/124021.png" alt="Twitter" /></a></li>
        <li><a href="/" class="social-icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYDAcnVnJ-DFPYXNO9mQsSP9xjHF2L5Krkpl-issrajYCHSSaf8fleAtUJ1f082_zLOU&usqp=CAU" alt="LinkedIn" /></a></li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;

import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const isLoggedIn = false;
  return (
    <nav id='menu'>
      <div className='logo'>
        <Link to='/'><h1>LOGO</h1></Link>
      </div>
      <input type='checkbox' className='responsive-menu' /><label></label>
      <ul>
        <li><Link to={'/'} className='menu-links'>Home</Link></li>
        <li><Link className='dropdown-arrow menu-links'>Products</Link>
          <ul className='sub-menus'>
            <li><Link to='/' className='menu-links'>Products 1</Link></li>
            <li><Link to='/' className='menu-links'>Products 2</Link></li>
            <li><Link to='/' className='menu-links'>Products 3</Link></li>
            <li><Link to='/' className='menu-links'>Products 4</Link></li>
          </ul>
        </li>
        <li><Link to='/' className='menu-links'>About</Link></li>
        <li><Link className='dropdown-arrow menu-links' >Services</Link>
          <ul className='sub-menus'>
            <li><Link to='/' className='menu-links'>Services 1</Link></li>
            <li><Link to='/' className='menu-links'>Services 2</Link></li>
            <li><Link to='/' className='menu-links'>Services 3</Link></li>
          </ul>
        </li>
        <li><Link to='/' className='menu-links'>Contact Us</Link></li>
      </ul>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..."></input>
        <button className="search-btn"></button>
      </div>
      <div className="menu-buttons">
        {isLoggedIn ?
          <div style={{ width: '100%', display: 'flex' }}>
            <h6 style={{ margin: 'auto', marginLeft: '10px', cursor: 'pointer' }}>icon1</h6>
            <h6 style={{ margin: 'auto', marginLeft: '10px', cursor: 'pointer' }}>icon2</h6>
            <h6 style={{ margin: 'auto', marginLeft: '10px', cursor: 'pointer' }}>icon3</h6>
          </div>
          :
          <div style={{ display: 'flex' }}>
            <div className='menu-login-btn'>
              <Link to={'/login'} className='menu-register-login'>Sign In</Link>
            </div>
            <div className='menu-register-btn'>
              <Link to={'/register'} className='menu-register-login'>Sign Up</Link>
            </div>
          </div>
        }
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function HeaderCom() {
  const location = useLocation(); // 현재 페이지의 경로 가져오기
  

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo me-auto me-lg-0">
            <a href="/" className={location.pathname === '/' ? 'active' : ''}>
              HONMONO
            </a>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul className='nav'>
              <li className='nav-item'>
                <a href="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href="/about" className={location.pathname === '/about' ? 'active' : ''}>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
                  Resume
                </a>
              </li>
              <li className='nav-item'>
                <a href="/services" className={location.pathname === '/services' ? 'active' : ''}>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          <div className="header-social-links">

            <a href="https://www.facebook.com/profile.php?id=100006499050988&locale=ko_KR" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/99_ezwoo/" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCom;
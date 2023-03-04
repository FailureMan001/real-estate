import React,{ useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting, faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  return (
    <div>
      <nav className={`navbar ${stickyClass}`}>
        <div className="navbar-two ">
          <div className="navbar-svg">
            <Link className="nav-link" href="/">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className="fa-2x text-orange-500"
              />
              VARA HOME
            </Link>
            <button
              className="button-bar"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-blue-900" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="ul-main ">
              <li className="nav-item">
                <Link className="li-link" to="/">
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="li-link" to="/about">
                  <span className="ml-2  ">ABOUT US</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="li-link" to="/blog">
                  <span className="ml-2  ">BLOG</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="li-link" to="/contact">
                  <span className="ml-2  ">CONTACT US</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );


}

export default Header
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import flag1 from "../images/flags/fr.png";
import flag2 from "../images/flags/pt.png";
import flag3 from "../images/flags/gr.png";
import flag4 from "../images/flags/tr.png";
import logo from '../images/logo.svg';
import SearchIcon from '../images/icon/search.svg';
import CloseIcon from "../images/icon/close-icon.svg";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'EN',
    flag: 'https://vectra.kidzz.in/backup_full/images/flags/us.png',
  });

  const languages = [
    { code: 'EN', flag: 'https://vectra.kidzz.in/backup_full/images/flags/us.png' },
    { code: 'FR', flag: flag1 },
    { code: 'PT', flag: flag2 },
    { code: 'DE', flag: flag3 },
    { code: 'TR', flag: flag4 },
  ];

  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };
  const toggleDropdowns = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSubMenu = (menuName) => {
    if (openSubmenu === menuName) {
      setOpenSubmenu(null); // Close the submenu if it's already open
    } else {
      setOpenSubmenu(menuName); // Open the submenu
    }
  };
  const elementRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setIsHidden(width <= 1200);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <header className="header" ref={elementRef}>
        <div className="headerTopBar">
          <div className="container">
            <div className="text-center headerTopBarinner">
              <p className="mb-0">Enabling Positive Impact</p>
            </div>
          </div>
        </div>
        <div className="navigationArea">
          <div className="container">
            <div className="navigationAreainner">
              <nav className="navbar navbar-expand-xl">
                <button className="navbar-toggler" onClick={()=>setIsMenuOpen(true)} type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" aria-expanded="true">
                  <i className="fas fa-bars" />
                </button>
                <a className="navbar-brand" href>
                  <img className="img-fluid ls-is-cached lazyloaded" src={logo} alt="logo"  />
                </a>
                <div className="language-selector" >
      <button onClick={toggleDropdowns} className="dropdown-btn" style={{width:'90px'}}>
        <img src={selectedLanguage.flag} alt={selectedLanguage.code} className="selected-flag" />
        <span className="selected-language">{selectedLanguage.code}</span>
        <span className="arrow-down" />
      </button>
      
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        {languages.map((language, index) => (
          <li key={index} onClick={() => selectLanguage(language)}>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <img src={language.flag} alt={language.code} className="me-2" style={{ width: '20px', height: '20px' }} />
              {language.code}
            </a>
          </li>
        ))}
      </ul>
      
    </div>
                <div className={`menu_overlay ${isMenuOpen ? "menu-visible":""}`} />
                <div className={`navbar-collapse  collapse ${isMenuOpen ?"menu-visible show":""}`} id="mynavbar" style={{}}>
                  <div className="text-center navbar-collapse-topBar">
                    <p className="mb-0">Enabling Positive Impact</p>
                  </div>
                  <div className="navbar-collapse-top">
                    <div className="d-flex justify-content-between align-items-center navbar-collapse-topinner">
                      <div className="leftPart">
                        <a className="navbar-collapse-brand" href>
                          <img className="img-fluid ls-is-cached lazyloaded" src={logo} alt="logo"  />
                        </a>
                      </div>
                      <div className="rightPart">
                        <a className="top-search-link" href="#">
                          <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={SearchIcon} />
                        </a>
                        <span className="menu_close_btn" onClick={()=>setIsMenuOpen(false)}>
                          <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={CloseIcon} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="navbar-nav mx-auto1">
                    <li className={`nav-item dropdown_menu ${openSubmenu === "services" ?"curent":""}`} onClick={()=>toggleSubMenu("services")}>
                      <Link className="nav-link" to="services">Services</Link>
                      <ul className="sub-menu">
                        <li><a href="/service-detail/compliance-risk-due-diligence">Compliance, Risk, &amp; Due diligence </a></li>
                        <li><a href="/service-detail/current-situation-analysis">Current Situation Analysis</a></li>
                        <li><a href="/service-detail/independent-quality-assurance">Independent Quality Assurance</a></li>
                        <li><a href="/service-detail/reporting">Reporting</a></li>
                        <li><a href="/service-detail/site-performance-improvement">Site Performance Improvement</a></li>
                        <li><a href="/service-detail/training">Training</a></li>
                      </ul>
                    </li>
                    <li className={`nav-item dropdown_menu ${openSubmenu === "resources"?"curent":""}`} onClick={()=>toggleSubMenu("resources")}>
                      <Link className="nav-link" to="/resources">Resources</Link>
                      <ul className="sub-menu">
                        {/* <li><a href="/resources">Blogs</a></li>
                        <li><a href="/article">Articles</a></li> */}
                        <li><a href="/resources">Blogs</a></li>
                        <li><a href="/client-success-stories">Client Success Stories</a></li>
                        <li><a href="/guide">eBooks</a></li>
                        <li><a href="/press-releases">Press Releases</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://shop.vectra-intl.com" target="_blank">Shop</a>
                    </li>
                    <li className="nav-item nav-about-item">
                      <a className="nav-link nav-about-link" href="about-us">About Us</a>
                    </li>
                    {/*<li class="nav-item nav-search-item">*/}
                    {/*	<a class="nav-link nav-search-link" href="#">*/}
                    {/*		<img class="img-fluid lazyload" data-src="images/icon/search.svg" alt="logo">*/}
                    {/*	</a>*/}
                    {/*</li>*/}
                    <li className="nav-item nav-contact-item">
                      <a className="nav-link nav-contact-link" href="contact-us">Contact Us</a>
                    </li>
                  </ul>
                  <div className="navbar-collapse-region">
                    <div className="navbar-collapse-region-blank" />	
                  </div>
                  <div className="navbar-collapse-bottom">
                  </div>
                </div>
                <div className="rightSide">
                  <a className="custome-btn contactBtnBtn" href="contact-us"><span className="txt">Contact Us</span></a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
  );

};

export default Header;

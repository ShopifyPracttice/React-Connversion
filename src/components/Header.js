import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import flag1 from "../images/flags/fr.png";
import flag2 from "../images/flags/pt.png";
import flag3 from "../images/flags/gr.png";
import flag4 from "../images/flags/tr.png";
import logo from '../images/logo.svg';
import SearchIcon from '../images/icon/search.svg';
import CloseIcon from "../images/icon/close-icon.svg";
import { Link } from 'react-router-dom';
const Header = () =>{
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
  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  console.log(isOpen);
  
      return (
  
        <header className="header">
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
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <i className="fas fa-bars" />
                  </button>
                  <Link className="navbar-brand" to='/'>
                    <img className="img-fluid lazyload" src={logo} alt="logo" />
                  </Link>
                  <div className="language-selector">
      <button onClick={toggleDropdown} className="dropdown-btn">
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

                  {/*<div class="language-selector language-selector-header">*/}
                  {/*	<button id="dropdown-btn" class="dropdown-btn">*/}
                  {/*		<img id="selected-flag" class="selected-flag" src="<?=$base_url?>images/flags/us.png" alt="flag" />*/}
                  {/*		<span id="selected-language" class="selected-language">EN</span>*/}
                  {/*		<span class="arrow-down"></span>*/}
                  {/*	</button>*/}
                  {/*	<ul id="dropdown-content" class="dropdown-content">*/}
                  {/* Options will be populated by JavaScript */}
                  {/*	</ul>*/}
                  {/*</div>*/}
                  {/*
                          <div class="footerRegionBox">
                              <span class="icon"><img class="img-fluid ls-is-cached lazyloaded"
                                      data-src="<?=$base_url?>images/icon/glob-icon.svg" alt="" src="<?=$base_url?>images/icon/glob-icon.svg"></span>
                              <select class="form-select">
                                  <option>EN</option>
                              </select>
                          </div>
                      */}
                  <div className="menu_overlay" />
                  <div className="collapse navbar-collapse" id="mynavbar">
                    <div className="text-center navbar-collapse-topBar">
                      <p className="mb-0">Enabling Positive Impact</p>
                    </div>
                    <div className="navbar-collapse-top">
                      <div className="d-flex justify-content-between align-items-center navbar-collapse-topinner">
                        <div className="leftPart">
                          <Link className="navbar-collapse-brand" to='/'>
                            <img className="img-fluid lazyload" src={logo} alt="logo" />
                          </Link>
                        </div>
                        <div className="rightPart">
                          <Link className="top-search-link" to="#">
                            <img className="img-fluid lazyload" src={SearchIcon} alt="logo" />
                          </Link>
                          <span className="menu_close_btn" href="#">
                            <img className="img-fluid lazyload" src={CloseIcon} alt="logo" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="navbar-nav mx-auto1">
                      <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                        <ul className="sub-menu">
                          <li><Link to="/service-detail/current-situation-analysis">Current Situation Analysis</Link></li>
                          <li><Link to="/service-detail/site-performance-improvement">Site Performance Improvement</Link></li>
                          <li><Link to="/service-detail/independent-quality-assurance">Independent Quality Assurance</Link></li>
                          <li><Link to="/service-detail/reporting">Reporting</Link></li>
                          <li><Link to="/service-detail/compliance-risk-due-diligence">Compliance, Risk, &amp; Due diligence </Link></li>
                          <li><Link to="/service-detail/training">Training</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Resources</Link>
                        <ul className="sub-menu">
                          <li><Link to="/resources">Blogs</Link></li>
                          {/*<li><a href="<?=$base_url?>blog">Blogs</a></li>*/}
                          <li><Link to="/client-success-stories">Client Success Stories</Link></li>
                          <li><Link to="/guide">eBooks</Link></li>
                          <li><Link to="/press-releases">Press Releases</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="https://shop.vectra-intl.com" target="_blank">Shop</Link>
                      </li>
                      <li className="nav-item nav-about-item">
                        <Link className="nav-link nav-about-link" to="/about-us">About Us</Link>
                      </li>
                      <li className="nav-item nav-search-item">
                        <Link className="nav-link nav-search-link" to="#">
                          <img className="img-fluid lazyload" src={SearchIcon} alt="logo" />
                        </Link>
                      </li>
                      <li className="nav-item nav-contact-item">
                        <Link className="nav-link nav-contact-link" to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                    <div className="navbar-collapse-region">
                      <div className="navbar-collapse-region-blank" />	
                    </div>
                    <div className="navbar-collapse-bottom">
                    </div>
                  </div>
                  <div className="rightSide">
                    <Link className="custome-btn contactBtnBtn" to="/contact-us"><span className="txt">Contact Us</span></Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    };
export default Header;
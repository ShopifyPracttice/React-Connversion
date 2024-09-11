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
    // <header className="header" ref={elementRef}>
    //   {/* Top Bar */}
    //   <div className="headerTopBar">
    //     <div className="container">
    //       <div className="text-center headerTopBarinner">
    //         <p className="mb-0">Enabling Positive Impact</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Navigation Area */}
    //   <div className="navigationArea">
    //     <div className="container">
    //       <div className="navigationAreainner">
    //         <nav className="navbar navbar-expand-xl">
    //           {/* Hamburger Menu Button */}
    //           <button className="navbar-toggler" type="button" onClick={toggleMenu}>
    //             <i className="fas fa-bars" />
    //           </button>

    //           {/* Logo */}
    //           <Link className="navbar-brand" to='/'>
    //             <img className="img-fluid lazyload" src={logo} alt="logo" />
    //           </Link>

    //           {/* Language Selector */}
    //           <div className="language-selector">
    //             <button onClick={toggleDropdown} className="dropdown-btn" style={{ width: '90px' }}>
    //               <img src={selectedLanguage.flag} alt={selectedLanguage.code} className="selected-flag" />
    //               <span className="selected-language">{selectedLanguage.code}</span>
    //             </button>
    //             <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
    //               {languages.map((language, index) => (
    //                 <li key={index} onClick={() => selectLanguage(language)}>
    //                   <a className="dropdown-item d-flex align-items-center" href="#">
    //                     <img src={language.flag} alt={language.code} className="me-2" style={{ width: '20px', height: '20px' }} />
    //                     {language.code}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //           <div className="navbar-collapse collapse" id="mynavbar" style={{}}>
    //     <div className="text-center navbar-collapse-topBar">
    //       <p className="mb-0">Enabling Positive Impact</p>
    //     </div>
    //     <div className="navbar-collapse-top">
    //       <div className="d-flex justify-content-between align-items-center navbar-collapse-topinner">
    //         <div className="leftPart">
    //           <a className="navbar-collapse-brand" href="https://apexxcapital.co/">
    //             <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/logo.svg" alt="logo" src="https://apexxcapital.co/images/logo.svg" />
    //           </a>
    //         </div>
    //         <div className="rightPart">
    //           <a className="top-search-link" href="#">
    //             <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/search-icon-2.svg" alt="logo" src="https://apexxcapital.co/images/icon/search-icon-2.svg" />
    //           </a>
    //           <span className="menu_close_btn" href="#">
    //             <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/close-icon.svg" alt="logo" src="https://apexxcapital.co/images/icon/close-icon.svg" />
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <ul className="navbar-nav mx-auto1">
    //       <li className="nav-item dropdown_menu curent">
    //         <a className="nav-link" href="https://apexxcapital.co/services">Services</a>
    //         <ul className="sub-menu">
    //           <li><a href="https://apexxcapital.co/service-detail/compliance-risk-due-diligence">Compliance, Risk, &amp; Due diligence </a></li>
    //           <li><a href="https://apexxcapital.co/service-detail/current-situation-analysis">Current Situation Analysis</a></li>
    //           <li><a href="https://apexxcapital.co/service-detail/independent-quality-assurance">Independent Quality Assurance</a></li>
    //           <li><a href="https://apexxcapital.co/service-detail/reporting">Reporting</a></li>
    //           <li><a href="https://apexxcapital.co/service-detail/site-performance-improvement">Site Performance Improvement</a></li>
    //           <li><a href="https://apexxcapital.co/service-detail/training">Training</a></li>
    //         </ul>
    //       </li>
    //       <li className="nav-item dropdown_menu">
    //         <a className="nav-link" href="https://apexxcapital.co/resource">Resources</a>
    //         <ul className="sub-menu">
    //           <li><a href="https://apexxcapital.co/resource#blogs">Blogs</a></li>
    //           <li><a href="https://apexxcapital.co/resource#article">Articles</a></li>
    //           {/*<li><a href="https://apexxcapital.co/blog">Blogs</a></li>*/}
    //           {/*<li><a href="https://apexxcapital.co/client-success-stories">Client Success Stories</a></li>*/}
    //           {/*<li><a href="https://apexxcapital.co/guide">eBooks</a></li>*/}
    //           <li><a href="https://apexxcapital.co/resource#press-releases">Press Releases</a></li>
    //         </ul>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="https://shop.vectra-intl.com" target="_blank">Shop</a>
    //       </li>
    //       <li className="nav-item nav-about-item">
    //         <a className="nav-link nav-about-link" href="https://apexxcapital.co/about-us">About Us</a>
    //       </li>
    //       {/*<li class="nav-item nav-search-item">*/}
    //       {/*	<a class="nav-link nav-search-link" href="#">*/}
    //       {/*		<img class="img-fluid lazyload" data-src="https://apexxcapital.co/images/icon/search.svg" alt="logo">*/}
    //       {/*	</a>*/}
    //       {/*</li>*/}
    //       <li className="nav-item nav-contact-item">
    //         <a className="nav-link nav-contact-link" href="https://apexxcapital.co/contact-us">Contact Us</a>
    //       </li>
    //     </ul>
    //     <div className="navbar-collapse-region">
    //       <div className="navbar-collapse-region-blank" />	
    //     </div>
    //     <div className="navbar-collapse-bottom">
    //     </div>
    //   </div>

    //           {/* Right side contact link */}
    //           <div className="rightSide">
    //             <Link className="custome-btn contactBtnBtn" to="/contact-us">
    //               <span className="txt">Contact Us</span>
    //             </Link>
    //           </div>

    //           {/* Hamburger Menu Popup */}
    //           <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
    //             <div className="menu-overlay" onClick={toggleMenu}></div>
    //             <div className="menu-content">
    //               <div className="menu-header">
    //                 <Link className="navbar-brand" to='/'>
    //                   <img className="img-fluid" src={logo} alt="logo" />
    //                 </Link>
    //                 <span className="menu_close_btn" onClick={toggleMenu}>
    //                   <img className="img-fluid" src={CloseIcon} alt="close" />
    //                 </span>
    //               </div>

    //               <ul className="navbar-nav mx-auto">
    //                 <li className={`nav-item dropdown_menu ${openSubmenu === "services" ?"curent":""}`} onClick={() => toggleSubMenu('services')}>
    //                   <Link  className={`nav-link  `} to="/services">
    //                   Servicess
    //                   {/* <i class="fa" onClick={() => toggleSubMenu('services')}>&#xf067;</i> */}
    //                   </Link>
    //                   <ul className={`sub-menu `}>
    //                     <li><Link to="/service-detail/current-situation-analysis">Current Situation Analysis</Link></li>
    //                     <li><Link to="/service-detail/site-performance-improvement">Site Performance Improvement</Link></li>
    //                     <li><Link to="/service-detail/independent-quality-assurance">Independent Quality Assurance</Link></li>
    //                     <li><Link to="/service-detail/reporting">Reporting</Link></li>
    //                     <li><Link to="/service-detail/compliance-risk-due-diligence">Compliance, Risk, & Due diligence </Link></li>
    //                     <li><Link to="/service-detail/training">Training</Link></li>
    //                   </ul>
    //                 </li>

    //                 <li className={`nav-item dropdown_menu ${openSubmenu === "resources" ?"curent":""}`} onClick={() => toggleSubMenu('resources')}>
    //                   <Link className="nav-link" to="/resources">
    //                   Resources
    //                   {/* <i class="fa" onClick={() => toggleSubMenu('resources')}>&#xf067;</i> */}
    //                   </Link>
    //                   <ul className={`sub-menu ${openSubmenu === 'resources' ? 'open' : ''}`} style={{display: openSubmenu === "resources"?"block":'none', height: openSubmenu === "resources"?"450px":""}}>
    //                     <li><Link to="/blogs">Blogs</Link></li>
    //                     <li><Link to="/articles">Articles</Link></li>
    //                     <li><Link to="/press-releases">Press Releases</Link></li>
    //                   </ul>
    //                 </li>

    //                 <li className="nav-item">
    //                   <Link className="nav-link" to="https://shop.vectra-intl.com" target="_blank">Shop</Link>
    //                 </li>

    //                 <li className="nav-item nav-about-item">
    //                   <Link className="nav-link" to="/about-us">About Us</Link>
    //                 </li>

    //                 <li className="nav-item nav-contact-item">
    //                   <Link className="nav-link" to="/contact-us">Contact Us</Link>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    // </header>
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
                        <li><a href="service-detail/compliance-risk-due-diligence">Compliance, Risk, &amp; Due diligence </a></li>
                        <li><a href="service-detail/current-situation-analysis">Current Situation Analysis</a></li>
                        <li><a href="service-detail/independent-quality-assurance">Independent Quality Assurance</a></li>
                        <li><a href="service-detail/reporting">Reporting</a></li>
                        <li><a href="service-detail/site-performance-improvement">Site Performance Improvement</a></li>
                        <li><a href="service-detail/training">Training</a></li>
                      </ul>
                    </li>
                    <li className={`nav-item dropdown_menu ${openSubmenu === "resources"?"curent":""}`} onClick={()=>toggleSubMenu("resources")}>
                      <Link className="nav-link" to="/resource">Resources</Link>
                      <ul className="sub-menu">
                        <li><a href="resource#blogs">Blogs</a></li>
                        <li><a href="resource#article">Articles</a></li>
                        {/*<li><a href="blog">Blogs</a></li>*/}
                        {/*<li><a href="client-success-stories">Client Success Stories</a></li>*/}
                        {/*<li><a href="guide">eBooks</a></li>*/}
                        <li><a href="resource#press-releases">Press Releases</a></li>
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

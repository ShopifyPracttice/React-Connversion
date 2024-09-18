import logo from "../images/logo.svg";
import LocationLogo from "../images/icon/location-icon.svg";
import PhoneLogo from "../images/icon/phone-icon.svg";
import MailIcon from "../images/icon/mail-icon.svg";
import LinkedInLogo from "../images/icon/linkdin-icon.svg";
import YoutubeLogo from "../images/icon/youtube-icon.svg";
import FacebookLogo from "../images/icon/facebook-icon.svg";
import InstagramLogo from "../images/icon/instagram-icon.svg";
import TwitterLogo from "../images/icon/twitter-icon.svg";
import { Link } from 'react-router-dom';
const Footer = ()=>{
      return (
  
        <footer className="footer">
          <div className="footer_top">
            <div className="container" style={{maxWidth:"95%"}}>
              <div className="row rowBox">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 columnBox mb-20">
                  <div className="mb-10 footerLogo">
                    <img src={logo} className="img-fluid lazyload" alt="" />
                  </div>
                  <div className="footerContactArea">
                    <ul>
                      <li className="d-flex align-items-center">
                        <div className="icon"><img src={LocationLogo} className="img-fluid lazyload" alt="" /></div>
                        <div className="content">Chaussée de Wavre 1517B<br />1160 Brussels, Belgium</div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="icon"><img src={PhoneLogo} className="img-fluid lazyload" alt="" /></div>
                        <div className="content"><Link to="tel:+32495239088">+32 495 239088</Link></div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="icon"><img src={MailIcon} className="img-fluid lazyload" alt="" /></div>
                        <div className="content"><Link href="mailto:info@vectra-intl.com">info@vectra-intl.com</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 columnBox mb-20">
                  <h4 className="mb-20 fw-600 footerTitle">Quick Links</h4>
                  <div className="footerLinksArea">
                    <div className="row rowBox2">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 columnBox2">
                        <ul className="footerLinks">
                          <li><Link to="/about-us">About Us</Link></li>
                          <li><Link to="/services">Services</Link></li>
                          <li><Link to="/careers">Careers</Link></li>
                          <li><Link to="/resources">Resources</Link></li>
                          <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                      </div>
                      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-6 columnBox2">
                        <ul className="footerLinks">
                          <li><Link to="/environmental-sustainability-pledge">Environmental Sustainability Pledge</Link></li>
                          <li><Link to="/social-impact-pledge">Social Impact Pledge</Link></li>
                          <li><Link to="/diversity-equity-and-inclusion-pledge">DEI Pledge</Link></li>
                          {/*<li><a href="#">Sitemap</a></li>*/}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 columnBox mb-20">
                  <div className="mb-30 footerSocialLinksArea">
                    <h4 className="mb-20 fw-600 footerTitle">Follow Us</h4>
                    <ul className="footerSocialLinks">
                      <li>
                        <Link to="https://www.linkedin.com/company/vectra-international/" target="_blank">
                          <img src={LinkedInLogo} className="img-fluid lazyload" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.youtube.com/@VECTRAInternational" target="_blank">
                          <img src={YoutubeLogo} className="img-fluid lazyload" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.facebook.com/vectrainternational" target="_blank">
                          <img src={FacebookLogo} className="img-fluid lazyload" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link tp="https://www.instagram.com/vectrainternational" target="_blank">
                          <img src={InstagramLogo} className="img-fluid lazyload" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/VECTRAintl" target="_blank">
                          <img src="https://apexxcapital.co/images/icon/twitter-icon.webp"  className="img-fluid lazyload" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="footerNewsletterBtnArea">
                    <a href="#" className="custome-btn subscribe-btn">
                      <span className="txt">Subscribe to the VECTRA Newsletter</span>
                      <span className="icon"><img className="img-fluid lazyload" src={RightArrow} alt="logo" /></span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*
           <div class="footer_middle">
              <div class="container">
               
              </div>
           </div>
           */}
          <div className="footer_bottom">
            <div className="container" style={{maxWidth:"95%"}}>
              <div className="footer_bottominner">
                <div className="row rowBox align-items-center">
                  <div className="col-xxl-6 col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 columnBox">
                    <div className="copyWriteArea">
                      <p className="mb-0">© {/*?=date('Y')?*/} VECTRA International | All Rights Reserved.</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12 columnBox">
                    <div className="footer_bottomRightArea">
                      {/*<div class="footerRegionBox">*/}
                      {/*	<span class="icon"><img class="img-fluid lazyload"*/}
                      {/*			data-src="<?=$base_url?>images/icon/glob-icon.svg" alt=""></span>*/}
                      {/*	<select class="form-select">*/}
                      {/*		<option>Choose Region</option>*/}
                      {/*	</select>*/}
                      {/*</div>*/}
                      <div className="footerRegionBox">
        <span className="icon"><img className="img-fluid lazyloaded" data-src="https://vectra.kidzz.in/backup_full/images/icon/glob-icon.svg" alt="" src="https://vectra.kidzz.in/backup_full/images/icon/glob-icon.svg" /></span>
        <select className="" style={{outline:"none", border:"none"}}>
          <option>Choose Region</option>
        </select>
      </div>
                      <ul className="footerUseFulLinks">
                        {/*<li><a href="#">Terms & Conditions</a></li>*/}
                        <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };
export default Footer;    
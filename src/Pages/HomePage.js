import OwlCarousel from 'react-owl-carousel';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RightArrow2 from "../images/icon/right-arrow-2.svg";
import NewsLetter from "../images/icon/newsletter-icon.svg";
import RightArrow from "../images/icon/right-arrow.svg";
import ToolIcon from "../images/icon/tools-icon.svg";
import TrainingIcon from "../images/icon/training-icon.svg";
import CoachingIcon from "../images/icon/coching-icon.svg";
import Video from "../video/home-video.mp4";
import ConsultingIcon from "../images/icon/consulting-icon.svg";
import Client1 from "../images/client/client1.svg";
import Client2 from "../images/client/client2.svg";
import Client3 from "../images/client/client3.svg";
import Client4 from "../images/client/client4.svg";
import Client5 from "../images/client/client5.svg";
import Client6 from "../images/client/client6.svg";
import Client7 from "../images/client/client7.svg";
import Client8 from "../images/client/client8.svg";
import Client9 from "../images/client/client9.svg";
import Client10 from "../images/client/client10.svg";
import Client11 from "../images/client/client11.svg";
import Client12 from "../images/client/client12.svg";
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import WhatStopping from '../components/WhatStopping';
import ClientStories from '../components/ClientStories';

const HomePage = ({setDisplayForm,setIsOpen})=>{
    const [formData, setFormData] = useState({
        full_name: '',
        company_name: '',
        industry: '',
        email: '',
        country_code: '+91',
        phone_number: '',
        notes: '',
        option1: false
      });
      const elementRef = useRef(null);
      const [isHidden, setIsHidden] = useState(false);
      console.log("diis", isHidden);
      
      useEffect(() => {
        const handleResize = () => {
          if (elementRef.current) {
            const width = elementRef.current.offsetWidth;
            setIsHidden(width <= 574);
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
  
    
    const options = {
        items: 9, // Adjust the number of visible items as needed
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 3,
          },
          600: {
            items: 6,
          },
          1000: {
            items: 9,
          }
        }
      };
      return (
        <main ref={elementRef}>
          <section className="homePageBanner mobilebanner">
            <div className="container" style={{maxWidth:'95%'}}>
              <div className="homePageBannerSecinner">
                <div className="homePageBannerContent">
                  <h1 className="fw-300 mb-20">Responsible ESG Business<br /> Consultants for Supply Chains</h1>
                  <p>We positively impact businesses, their workers and communities<br /> by helping to create
                    better,
                    more efficient supply chain workplaces.</p>
                  <div className="homePageBannerOfferArea">
                    <h4 className="fw-600 mb-10">What we offer:</h4>
                    <ul className="row rowBox homePageBannerOfferList">
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox homePageBannerOfferListItem">
                        <Link to="/service-detail/current-situation-analysis" className="d-flex justify-content-between align-items-center homePageBannerOfferLink">
                          <span className="txt">Current Situation<br /> Analysis</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow} alt="logo" /></span>
                        </Link>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox homePageBannerOfferListItem">
                        <Link to="/service-detail/site-performance-improvement" className="d-flex justify-content-between align-items-center homePageBannerOfferLink">
                          <span className="txt">Site Performance<br /> Improvement</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow} alt="logo" /></span>
                        </Link>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox homePageBannerOfferListItem">
                        <Link to="/service-detail/independent-quality-assurance" className="d-flex justify-content-between align-items-center homePageBannerOfferLink">
                          <span className="txt">Independent <br />Quality Assurance</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow} alt="logo" /></span>
                        </Link>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox homePageBannerOfferListItem">
                        <Link to="/service-detail/reporting" className="d-flex justify-content-between align-items-center homePageBannerOfferLink">
                          <span className="txt">Reporting</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow} alt="logo" /></span>
                        </Link>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox homePageBannerOfferListItem">
                        <Link to="/service-detail/compliance-risk-due-diligence" className="d-flex justify-content-between align-items-center homePageBannerOfferLink">
                          <span className="txt">Compliance, Risk, <br />&amp; Due diligence </span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow} alt="logo" /></span>
                        </Link>
                      </li>
                      <li className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox homePageBannerOfferListItem">
                        <Link to="/service-detail/training" className="d-flex justify-content-between align-items-center homePageBannerOfferLink">
                          <span className="txt">Training</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow} alt="logo" /></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="green-bg-color trustedSec">
            <div className="container-fluid">
              <div className="trustedHeadingSec text-center">
                <h2 className="fw-400 white-txt-color title">Trusted by <span className="fw-700">500+ Companies</span></h2>
              </div>
              <div className="trustedSecinner">
      <OwlCarousel className="trustedSlider owl-theme" {...options}>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client1} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client2} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client3} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client4} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client5} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client6} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client7} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client8} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client9} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client10} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client11} alt="logo" />
          </div>
        </div>
        <div className="trustedSliderItem">
          <div className="trustedSliderThumb">
            <img className="img-fluid lazyload" src={Client12} alt="logo" />
          </div>
        </div>
      </OwlCarousel>
    </div>
              {/* <div className="trustedSecinner">
                <div className="trustedSlider owl-carousel">
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client1} alt="lsogo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client2} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client3} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client4} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client5} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client6} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client7} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client8} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client9} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client10} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client11} alt="logo" />
                    </div>
                  </div>
                  <div className="trustedSliderItem">
                    <div className="trustedSliderThumb">
                      <img className="img-fluid lazyload" src={Client12} alt="logo" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
          <section className="pt-80 pb-50 homeAboutSec" style={{paddingTop: '80px', paddingBottom: '50px'}}>
            <div className="container">
              <div className="homeAboutSecinner">
                <div className="homeAboutArea">
                  <div className="row rowBox">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 columnBox mb-30">
                      <div className="homeAboutContent">
                        <h3 className="mav-20 fw-400 block-title">Unlock Instant Solutions<br /> with the <span className="green-txt-color">VECTRA Shop</span></h3>
                        <p className="mb-25 text">Get access to the comprehensive resources<br /> for meeting your
                          company’s ESG goals.</p>
                          {!isHidden && (
                            <Link to="https://shop.vectra-intl.com" className="custome-btn" target="_blank">
                          <span className="txt">Explore All</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow2} alt="logo" /></span>
                        </Link>
                          )}
                        
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 columnBox mb-30">
                      <div className="solutionListArea">
                        <div className="row rowBox">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox solutionListItem">
                            <Link to="https://shop.vectra-intl.com/consultancy" className="d-flex justify-content-between align-items-center solutionListIteminner">
                              <div className="d-flex align-items-center leftPart">
                                <span className="icon bg1">
                                  <img className="img-fluid lazyload" src={ConsultingIcon} alt="logo" />
                                </span>
                                <span className="txt">Consulting</span>
                              </div>
                              <div className="rightPart">
                                <span className="linkArrow">
                                  <img className="img-fluid lazyload" src={RightArrow} alt="logo" />
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox solutionListItem">
                            
                              <Link to="https://shop.vectra-intl.com" className=" d-flex justify-content-between align-items-center solutionListIteminner">
                              <div className="d-flex align-items-center leftPart">
                                <span className="icon bg2">
                                  <img className="img-fluid lazyload" src={ToolIcon} alt="logo" />
                                </span>
                                <span className="txt">Tools</span>
                              </div>
                              <div className="rightPart">
                                <span className="linkArrow">
                                  <img className="img-fluid lazyload" src={RightArrow} alt="logo" />
                                </span>
                              </div>
                            </Link>
                            
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox solutionListItem">
                            <Link to="https://shop.vectra-intl.com" className="d-flex justify-content-between align-items-center solutionListIteminner">
                              <div className="d-flex align-items-center leftPart">
                                <span className="icon bg3">
                                  <img className="img-fluid lazyload" src={TrainingIcon} alt="logo" />
                                </span>
                                <span className="txt">Trainings</span>
                              </div>
                              <div className="rightPart">
                                <span className="linkArrow">
                                  <img className="img-fluid lazyload" src={RightArrow} alt="logo" />
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 columnBox solutionListItem">
                            <Link to="https://shop.vectra-intl.com" className="d-flex justify-content-between align-items-center solutionListIteminner">
                              <div className="d-flex align-items-center leftPart">
                                <span className="icon bg1">
                                  <img className="img-fluid lazyload" src={CoachingIcon} alt="logo" />
                                </span>
                                <span className="txt">Coachings</span>
                              </div>
                              <div className="rightPart">
                                <span className="linkArrow">
                                  <img className="img-fluid lazyload" src={RightArrow} alt="logo" />
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {isHidden && (
                      <Link to="https://shop.vectra-intl.com" className="custome-btn" target="_blank">
                      <span className="txt">Explore All</span>
                      <span className="icon"><img className="img-fluid lazyload" src={RightArrow2} alt="logo" /></span>
                    </Link>
                      )}

                    </div>
                  </div>
                </div>
                <div className="pt-80 homeAboutVideoCounterArea" style={{paddingTop:'80px'}}>
                  <div className="row rowBox align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 columnBox mb-30">
                      <div className=" green-bg-color homeAboutVideoArea">
                        <video id="video333" width="100%" height="100%" controls autoPlay loop muted playsInline>
                          <source src={Video} type="video/mp4" />
                        </video>			
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 columnBox mb-30 " id="unique-id">
                      <div className="homeAboutCounterArea">
                        <h3 className="mav-20 fw-400 block-title">Your Trusted ESG Partner </h3>
                        <p className="mb-25 text">Our solutions are tailored to empower your organisation to
                          achieve<br />
                          ESG goals and build more resilient, responsible supply chains.</p>
                        <div className="mb-25 homeAboutCounterField">
                          <div className="row rowBox2">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 columnBox2 homeAboutCounterBox">
                              <div className="d-flex align-items-center homeAboutCounterBoxinner">
                                <h2 className="mb-0 mr-10 green-txt-color fw-300 number">
                                  <div className="counter-value"><span className="counter">20</span>
                                  </div>
                                  <span>+</span>
                                </h2>
                                <p className="mb-0 fw-600 text">Years of<br />Experience</p>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 columnBox2 homeAboutCounterBox">
                              <div className="d-flex align-items-center homeAboutCounterBoxinner">
                                <h2 className="mb-0 mr-10 green-txt-color fw-300 number">
                                  <div className="counter-value"><span className="counter">50</span>
                                  </div>
                                  <span>+</span>
                                </h2>
                                <p className="mb-0 fw-600 text">Experts<br />Worldwide </p>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 columnBox2 homeAboutCounterBox">
                              <div className="d-flex align-items-center homeAboutCounterBoxinner">
                                <h2 className="mb-0 mr-10 green-txt-color fw-300 number">
                                  <div className="counter-value"><span className="counter">500</span>
                                  </div>
                                  <span>+</span>
                                </h2>
                                <p className="mb-0 fw-600 text">Satisfied<br />Clients</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link to="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
                          <span className="txt">Get in Touch</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow2} alt="logo" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <WhatStopping/>
          <ClientStories/>
          <ContactForm/>
          <section className="pt-50 pb-60 homeSubscribeSec" style={{paddingTop: '50px', paddingBottom: '60px'}}>
            <div className="container">
              <div className="homeSubscribeSecinner">
                <div className="text-center homeSubscribeContent">
                  <div className="icon mb-25">
                    <img className="img-fluid lazyload" src={NewsLetter} alt="logo" />
                  </div>
                  <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news,
                    insightful<br /> expert analysis,
                    and practical tips—delivered straight to your inbox. </h4>
                  <Link to="#" onClick={()=>setIsOpen(true)} className="custome-btn subscribe-btn">
                    <span className="txt">Subscribe Now!</span>
                    <span className="icon"><img className="img-fluid lazyload" src={RightArrow2} alt="logo" /></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className style={{}}>
            <div className="container">
              <div className>
              </div>
            </div>
          </section>

        </main>
      );
    };
export default HomePage;    
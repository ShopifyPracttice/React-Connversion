import OwlCarousel from 'react-owl-carousel';
import React, { useState } from 'react';
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

const HomePage = ()=>{
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
      const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
 
//   $(document).ready(function(){
//       $('#contactForm').on('submit', function(e){
//           e.preventDefault();
          
//           $.ajax({
//               type: 'POST',
//               url: 'send_mail.php',
//               data: $(this).serialize(),
//               success: function(response){
//                   $('#thankYouPopup').show();
//               }
//           });
//       });
//   });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('send_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setThankYouVisible(true);
        // Optionally, reset form
        setFormData({
          full_name: '',
          company_name: '',
          industry: '',
          email: '',
          country_code: '+91',
          phone_number: '',
          notes: '',
          option1: false
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log(thankYouVisible);
  
    
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
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 9,
          }
        }
      };
      return (
        <main className>
          <section className="homePageBanner mobilebanner">
            <div className="container">
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
                        <Link to="https://vi-tech.com.tr" className="custome-btn" target="_blank">
                          <span className="txt">Explore All</span>
                          <span className="icon"><img className="img-fluid lazyload" src={RightArrow2} alt="logo" /></span>
                        </Link>
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
                            <Link to="https://shop.vectra-intl.com" className="d-flex justify-content-between align-items-center solutionListIteminner">
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
                    </div>
                  </div>
                </div>
                <div className="pt-80 homeAboutVideoCounterArea" style={{paddingTop:'80px'}}>
                  <div className="row rowBox align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 columnBox mb-30">
                      <div className="mr-50 green-bg-color homeAboutVideoArea">
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
                        <Link to="#getInTouch" className="custome-btn">
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
          {/* <section className="highligtContentSec" data-background="images/bg/bg-2.svg">
            <div className="container">
              <div className="highligtContentSecinner">
                <div className="row rowBox">
                  <div className="col-lg-7 col-md-7 col-sm-12 col-12 columnBox">
                    <div className="pt-80 pb-80 highligtContent">
                      <h3 className="block-title fw-400 mb-15">You know what's stopping you from successfully<br />
                        integrating ESG practices into your mining
                        operation?</h3>
                      <p className="mb-20">Get access to the comprehensive resources<br /> for meeting your
                        company’s ESG goals.</p>
                      <a href="#" className="custome-btn subscribe-btn">
                        <span className="txt">Learn More</span>
                        <span className="icon"><img className="img-fluid lazyload" data-src="images/icon/right-arrow-2.svg" alt="logo" /></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 col-12 columnBox">
                    <div className="highligtContentThumb">
                      <img className="img-fluid lazyload" data-src="images/bg/bg-2.svg" alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-80 pb-60 testimonialSec" style={{}}>
            <div className="container">
              <div className="mb-40 text-center testimonialHeader">
                <h3 className="block-title fw-400 mb-10">What Our Clients Are<br /> Saying about Us</h3>
              </div>
              <div className="testimonialSecinner">
                <div className="testimonialSlider owl-carousel">
                  <div className="testimonialSliderItem">
                    <div className="testimonialBox">
                      <div className="testimonialBoxinner">
                        <div className="testimonialContent">
                          <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            at magna sed nulla accumsan
                            elementum sit amet ut mauris. Donec hendrerit pharetra nulla suscipit
                            dapibus. Nulla rhoncus convallis dui
                            in tristique. Nullam vel accumsan metus. Curabitur porta tempor ante ac
                            volutpat. Vivamus eu mi sed leo porta
                            bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                        </div>
                        <div className="mt-10 mb-20 divider-line" />
                        <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                          <div className="leftPart">
                            <div className="d-flex align-items-center userInfo">
                              <div className="userThumb mr-10">
                                <img className="img-fluid lazyload" data-src="images/testimonial/thumb-1.png" alt="logo" />
                              </div>
                              <div className="content">
                                <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram</h4>
                                <p className="mb-0">Chief Executive Officer</p>
                              </div>
                            </div>
                          </div>
                          <div className="rightPart">
                            <span className>
                              <img className="img-fluid lazyload" data-src="images/testimonial/addidas-logo.svg" alt="logo" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonialSliderItem">
                    <div className="testimonialBox">
                      <div className="testimonialBoxinner">
                        <div className="testimonialContent">
                          <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            at magna sed nulla accumsan
                            elementum sit amet ut mauris. Donec hendrerit pharetra nulla suscipit
                            dapibus. Nulla rhoncus convallis dui
                            in tristique. Nullam vel accumsan metus. Curabitur porta tempor ante ac
                            volutpat. Vivamus eu mi sed leo porta
                            bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                        </div>
                        <div className="mt-10 mb-20 divider-line" />
                        <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                          <div className="leftPart">
                            <div className="d-flex align-items-center userInfo">
                              <div className="userThumb mr-10">
                                <img className="img-fluid lazyload" data-src="images/testimonial/thumb-1.png" alt="logo" />
                              </div>
                              <div className="content">
                                <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram</h4>
                                <p className="mb-0">Chief Executive Officer</p>
                              </div>
                            </div>
                          </div>
                          <div className="rightPart">
                            <span className>
                              <img className="img-fluid lazyload" data-src="images/testimonial/addidas-logo.svg" alt="logo" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonialSliderItem">
                    <div className="testimonialBox">
                      <div className="testimonialBoxinner">
                        <div className="testimonialContent">
                          <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            at magna sed nulla accumsan
                            elementum sit amet ut mauris. Donec hendrerit pharetra nulla suscipit
                            dapibus. Nulla rhoncus convallis dui
                            in tristique. Nullam vel accumsan metus. Curabitur porta tempor ante ac
                            volutpat. Vivamus eu mi sed leo porta
                            bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                        </div>
                        <div className="mt-10 mb-20 divider-line" />
                        <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                          <div className="leftPart">
                            <div className="d-flex align-items-center userInfo">
                              <div className="userThumb mr-10">
                                <img className="img-fluid lazyload" data-src="images/testimonial/thumb-1.png" alt="logo" />
                              </div>
                              <div className="content">
                                <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram</h4>
                                <p className="mb-0">Chief Executive Officer</p>
                              </div>
                            </div>
                          </div>
                          <div className="rightPart">
                            <span className>
                              <img className="img-fluid lazyload" data-src="images/testimonial/addidas-logo.svg" alt="logo" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonialSliderItem">
                    <div className="testimonialBox">
                      <div className="testimonialBoxinner">
                        <div className="testimonialContent">
                          <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            at magna sed nulla accumsan
                            elementum sit amet ut mauris. Donec hendrerit pharetra nulla suscipit
                            dapibus. Nulla rhoncus convallis dui
                            in tristique. Nullam vel accumsan metus. Curabitur porta tempor ante ac
                            volutpat. Vivamus eu mi sed leo porta
                            bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                        </div>
                        <div className="mt-10 mb-20 divider-line" />
                        <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                          <div className="leftPart">
                            <div className="d-flex align-items-center userInfo">
                              <div className="userThumb mr-10">
                                <img className="img-fluid lazyload" data-src="images/testimonial/thumb-1.png" alt="logo" />
                              </div>
                              <div className="content">
                                <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram</h4>
                                <p className="mb-0">Chief Executive Officer</p>
                              </div>
                            </div>
                          </div>
                          <div className="rightPart">
                            <span className>
                              <img className="img-fluid lazyload" data-src="images/testimonial/addidas-logo.svg" alt="logo" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonialSliderItem">
                    <div className="testimonialBox">
                      <div className="testimonialBoxinner">
                        <div className="testimonialContent">
                          <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            at magna sed nulla accumsan
                            elementum sit amet ut mauris. Donec hendrerit pharetra nulla suscipit
                            dapibus. Nulla rhoncus convallis dui
                            in tristique. Nullam vel accumsan metus. Curabitur porta tempor ante ac
                            volutpat. Vivamus eu mi sed leo porta
                            bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                        </div>
                        <div className="mt-10 mb-20 divider-line" />
                        <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                          <div className="leftPart">
                            <div className="d-flex align-items-center userInfo">
                              <div className="userThumb mr-10">
                                <img className="img-fluid lazyload" data-src="images/testimonial/thumb-1.png" alt="logo" />
                              </div>
                              <div className="content">
                                <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram</h4>
                                <p className="mb-0">Chief Executive Officer</p>
                              </div>
                            </div>
                          </div>
                          <div className="rightPart">
                            <span className>
                              <img className="img-fluid lazyload" data-src="images/testimonial/addidas-logo.svg" alt="logo" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="pt-80 pb-80 getInTouchSec"  style={{paddingTop: '80px', paddingBottom: '80px', background: `url(${ContactBackground}) no-repeat center center/cover` }}  id="getInTouch">
            <div className="container">
              <div className="getInTouchSecinner">
                <div className="getInTouchArea">
                  <div className="mb-25 text-center getInTouchHeaderArea">
                    <h3 className="block-title white-txt-color fw-400 title">Ready to Make a Positive Impact?</h3>
                    <p className="white-txt-color mb-0">Your commitment to a better world inspires us. Partner<br />
                      with us and let's amplify your impact together.</p>
                  </div>
                  <div className="getInTouchFormArea">
                    <form name="contactForm" method="post" id="contactForm">
                      <div className="form-group">
                        <input type="text" name="full_name" className="form-control" placeholder="Name" required />
                      </div>
                      <div className="form-group">
                        <input type="text" name="company_name" className="form-control" placeholder="Company name" required />
                      </div>
                      <div className="form-group">
                        <input type="text" name="industry" className="form-control" placeholder="Industry" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Email" required />
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-text">
                            <select name="country_code" className="form-select" required>
                              <option>+91</option>
                              <option>+1</option>
                            </select>
                          </span>
                          <input type="number" name="phone_number" className="form-control" placeholder="Phone Number" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea name="notes" className="form-control" placeholder="Notes" required defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="check1" name="option1" defaultValue="something" required />
                          <label className="form-check-label">I agree to the Privacy Policy</label>
                        </div>
                      </div>
                      <div className="getInTouchFormBtnArea">
                        <button type="submit" name="submit" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
                          <span className="txt">Get Started</span>
                          <span className="icon">
                            <img className="img-fluid lazyload" src={RightArrow2} alt="logo" />
                          </span>
                        </button>
                      </div>
                    </form>
                    <div id="thankYouPopup" style={{display: 'none', fontSize: '13px', padding: '10px 0 0 0'}}>
                      Thank you for your submission! Our team will get back to you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <ContactForm/>
           {/* <section 
      className="pt-80 pb-80 getInTouchSec" 
      style={{paddingTop: '80px', paddingBottom: '80px', background: `url(${ContactBackground}) no-repeat center center/cover`}}  
      id="getInTouch"
    >
      <div className="container">
        <div className="getInTouchSecinner">
          <div className="getInTouchArea">
            <div className="mb-25 text-center getInTouchHeaderArea">
              <h3 className="block-title white-txt-color fw-400 title">Ready to Make a Positive Impact?</h3>
              <p className="white-txt-color mb-0">
                Your commitment to a better world inspires us. Partner<br />
                with us and let's amplify your impact together.
              </p>
            </div>
            <div className="getInTouchFormArea">
              <form name="contactForm" method="post" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="full_name" 
                    className="form-control" 
                    placeholder="Name" 
                    value={formData.full_name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="company_name" 
                    className="form-control" 
                    placeholder="Company name" 
                    value={formData.company_name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="industry" 
                    className="form-control" 
                    placeholder="Industry" 
                    value={formData.industry}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-text">
                      <select 
                        name="country_code" 
                        className="form-select" 
                        value={formData.country_code}
                        onChange={handleChange}
                        required
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                      </select>
                    </span>
                    <input 
                      type="number" 
                      name="phone_number" 
                      className="form-control" 
                      placeholder="Phone Number" 
                      value={formData.phone_number}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea 
                    name="notes" 
                    className="form-control" 
                    placeholder="Notes" 
                    value={formData.notes}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="check1" 
                      name="option1" 
                      checked={formData.option1}
                      onChange={handleChange}
                      required 
                    />
                    <label className="form-check-label">I agree to the Privacy Policy</label>
                  </div>
                </div>
                <div className="getInTouchFormBtnArea">
                  <button 
                    type="submit" 
                    name="submit" 
                    className="justify-content-center w-100 custome-btn getInTouchFormBtn"
                  >
                    <span className="txt">Get Started</span>
                    <span className="icon">
                      <img className="img-fluid lazyload" src={RightArrow2} alt="logo" />
                    </span>
                  </button>
                </div>
              </form>
              {thankYouVisible && (
                <div 
                  id="thankYouPopup" 
                  style={{fontSize: '13px', padding: '10px 0 0 0'}}
                >
                  Thank you for your submission! Our team will get back to you.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section> */}
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
                  <Link to="#" className="custome-btn subscribe-btn">
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
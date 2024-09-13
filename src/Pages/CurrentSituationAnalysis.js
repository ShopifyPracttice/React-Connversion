import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Analysis from "../images/service/service-details-bg.png";
import RightArrow2 from "../images/icon/right-arrow-2.svg";
import AnalysisMobile from "../images/service/service-phone-img.svg";
import RightArrow from "../images/icon/right-arrow.svg";
import Meet from "../images/service/meet-img.png";
import ChooseIcon from "../images/service/choose-icon.png";
import ChooseIcon2 from "../images/service/choose-icon2.png";
import ChooseIcon3 from "../images/service/choose-icon3.png";
import ChooseIcon4 from "../images/service/choose-icon4.png";
import TouchLogo from "../images/bg/getInTouch-bg.webp";

const CurrentSituationAnalysis = ({setDisplayForm})=>{
  const elementRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const [selectDropDown, setSelectedDropDown] = useState("AD");
  const [displayDropDown, setDisplayDropDown] = useState(false);
   
   
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
      return (
        <main ref={elementRef}>
          <section className="service-details-banner" style={{background: `url(${Analysis}) no-repeat center center/cover`}}>
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="homePageBannerSecinner">
                <div className="homePageBannerContent">
                  <h1 className="fw-300 mb-20">Current Situation <br /> Analysis &amp; Reporting</h1>
                  <p>We provide a comprehensive assessment of your current situation, including a GAP analysis and
                    tailor-made recommendations for your organization.</p>
                  <Link to="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
                    <span className="txt">Get Started</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                  </Link>
                  <div className="service-mobile-img">
                    <div className="service-mobile-imginner"> 
                      <img src={AnalysisMobile} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="meet-sec pt-30">
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="meet-inner-sec">
                <div className="meet-inner-header-sec">
                  <h3 className="mav-20 fw-400 block-title">We can help your<br /> organization meet</h3>
                </div>
                <div className="row align-items-center pt-20">
                  <div className="col-lg-6">
                    <div className="meet-left">
                      <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#tabOne" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Audit Requirements of a
                            Compliance Standard <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#tabTwo" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Certification
                            Requirements <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#tabthree" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Current and/or
                            Proposed Legal Requirements <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#tabFour" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Company ESG Targets
                            and Reporting Commitments <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#tabFive" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Your Customer
                            Requirements <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meet-right">
                      <div className="tab-content meet-accordian" id="v-pills-tabContent">
                        <div className={`tab-pane fade show active meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "AD"?"curent":""}`} id="tabOne" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{setSelectedDropDown("AD"); setDisplayDropDown(!displayDropDown)}}>
                              <h4>Audit Requirements of a Compliance Standard</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>We offer cost-effective support to prepare your facility to meet and
                                exceed compliance codes of conduct and audits, such as RBA, ICS, FLA,
                                ESCP, amfori BSCI/BEPI, FWF, SMETA...</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-1" />                                            
                              </div>         
                              <div className="successStoriesSliderArea">
                                <div className="successStoriesSlider successStoriesSlider-1 owl-carousel">
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div> 
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>  
                                </div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "CR"?"curent":""}`} id="tabTwo" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{setSelectedDropDown("CR"); setDisplayDropDown(!displayDropDown)}}>
                              <h4>Certification Requirements</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>
                              We offer in-depth support to enable your organization to achieve certification standards, such as ISO, IRMA, SA8000, WRAP, GK...
                              </p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-2" />                                            
                              </div>         
                              <div className="successStoriesSliderArea">
                                <div className="successStoriesSlider successStoriesSlider-2 owl-carousel">
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div> 
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>  
                                </div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "CPLR"?"curent":""}`} id="tabthree" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{setSelectedDropDown("CPLR"); setDisplayDropDown(!displayDropDown)}}>
                              <h4>Current and/or Proposed Legal Requirements</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>
                              We help you meet current legal requirements and prepare for anticipated new ones in your
                                                countries of operation, target countries, or countries within your supply chain. For instance,
                                                EUDR, CSDDD, LkSG, NTA, CSRD/ESRS, UFLPA, Modern Slavery Acts...
                              </p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-3" />                                            
                              </div>         
                              <div className="successStoriesSliderArea">
                                <div className="successStoriesSlider successStoriesSlider-3 owl-carousel">
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div> 
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>  
                                </div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "ESG"?"curent":""}`} id="tabFour" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{setSelectedDropDown("ESG"); setDisplayDropDown(!displayDropDown)}}>
                              <h4>Company ESG Targets and Reporting Commitments</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>
                              We provide support to help you meet your short- and long-term ESG targets and commitments,
                              such as GHG net-zero, supplier ESG performance, and working hours in workplaces.
                              </p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-4" />                                            
                              </div>         
                              <div className="successStoriesSliderArea">
                                <div className="successStoriesSlider successStoriesSlider-4 owl-carousel">
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div> 
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>  
                                </div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "YCR"?"curent":""}`} id="tabFive" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{setSelectedDropDown("YCR"); setDisplayDropDown(!displayDropDown)}}>
                              <h4>Your Customer Requirements</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>
                              We enable you to effectively and efficiently implement your customers' ESG requirements in your operations, such as working hours, no forced labor, no child labor...
                              </p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-5" />                                            
                              </div>         
                              <div className="successStoriesSliderArea">
                                <div className="successStoriesSlider successStoriesSlider-5 owl-carousel">
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div> 
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>
                                  <div className="meet-right-slider-box">
                                    <img src={Meet} alt="" />
                                    <div className="meet-right-slider-box-inner">
                                      <p>How this footwear brand reduced its carbon footprint</p>
                                    </div>
                                  </div>  
                                </div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="meet-bottom">
                  <p className="sm-pl-20 sm-pr-20">Set up a <strong>free 15-minute call</strong> with our consultants to get started</p>
                  <Link to="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
                    <span className="txt">Contact Us</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="homeSubscribeSec why-choose-sec pt-80 pb-30">
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="why-choose-inner">
                <div className="why-choose-inner-header-sec">
                  <h3 className="block-title fw-400 mb-10">Why Choose<br /> VECTRA International?</h3>
                </div>       
                <div className="why-choose-list pt-30">
                  <div className="row">
                    <div className="col-lg-6 mb-45">
                      <div className="why-choose-list-box">
                        <div className="why-choose-box-left">
                          <div className="why-choose-icon">
                            <img src={ChooseIcon} alt="" />
                          </div>
                        </div>
                        <div className="why-choose-box-right">
                          <h4>Fast &amp; Effective Solutions</h4>
                          <p>Our agile approach delivers rapid results for maximum impact.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-45">
                      <div className="why-choose-list-box">
                        <div className="why-choose-box-left">
                          <div className="why-choose-icon">
                            <img src={ChooseIcon2} alt="" />
                          </div>
                        </div>
                        <div className="why-choose-box-right">
                          <h4>Tailored Strategies</h4>
                          <p>We create customized solutions that align with your specific goals and
                            values.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-45">
                      <div className="why-choose-list-box">
                        <div className="why-choose-box-left">
                          <div className="why-choose-icon">
                            <img src={ChooseIcon3} alt="" />
                          </div>
                        </div>
                        <div className="why-choose-box-right">
                          <h4>Customer Success at Our Core</h4>
                          <p>Your success is our focus. We're with you every step of the way.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-45">
                      <div className="why-choose-list-box">
                        <div className="why-choose-box-left">
                          <div className="why-choose-icon">
                            <img src={ChooseIcon4} alt="" />
                          </div>
                        </div>
                        <div className="why-choose-box-right">
                          <h4>Integrity &amp; Transparency</h4>
                          <p>We build trust through open communication and ethical practices.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="meet-bottom pt-0">
                  <p className="sm-pl-20 sm-pr-20 mb-30">Set up a <strong>free 15-minute call</strong> with our consultants to get started</p>
                  <Link to="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
                    <span className="txt">Contact Us</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="pt-80 pb-60 testimonialSec" style={{}}>
            <div className="container">
              <div className="mb-40 text-center testimonialHeader">
                <h3 className="block-title fw-400 mb-10">What Our Clients Are Saying about Us</h3>
              </div>
              <div className="testimonialSecinner">
                <div className="testimonialSlider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage" style={{transform: 'translate3d(-832px, 0px, 0px)', transition: '0.5s', width: '2082px'}}>
                      <div className="owl-item" style={{width: '396.333px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner service-details-slider">
                              <div className="testimonialContent">
                                <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Nunc at magna sed nulla accumsan
                                  elementum sit amet ut mauris. Donec hendrerit pharetra nulla
                                  suscipit dapibus. Nulla rhoncus convallis dui
                                  in tristique. Nullam vel accumsan metus. Curabitur porta tempor
                                  ante ac volutpat. Vivamus eu mi sed leo porta
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
                                      <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram
                                      </h4>
                                      <p className="mb-0">Chief Executive Officer</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="rightPart">
                                  <span className>
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/addidas-logo.svg" alt="logo" src="images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{width: '396.333px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner service-details-slider">
                              <div className="testimonialContent">
                                <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Nunc at magna sed nulla accumsan
                                  elementum sit amet ut mauris. Donec hendrerit pharetra nulla
                                  suscipit dapibus. Nulla rhoncus convallis dui
                                  in tristique. Nullam vel accumsan metus. Curabitur porta tempor
                                  ante ac volutpat. Vivamus eu mi sed leo porta
                                  bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                              </div>
                              <div className="mt-10 mb-20 divider-line" />
                              <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                                <div className="leftPart">
                                  <div className="d-flex align-items-center userInfo">
                                    <div className="userThumb mr-10">
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/thumb-1.png" alt="logo" src="images/testimonial/thumb-1.png" />
                                    </div>
                                    <div className="content">
                                      <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram
                                      </h4>
                                      <p className="mb-0">Chief Executive Officer</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="rightPart">
                                  <span className>
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/addidas-logo.svg" alt="logo" src="images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item active" style={{width: '396.333px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner service-details-slider">
                              <div className="testimonialContent">
                                <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Nunc at magna sed nulla accumsan
                                  elementum sit amet ut mauris. Donec hendrerit pharetra nulla
                                  suscipit dapibus. Nulla rhoncus convallis dui
                                  in tristique. Nullam vel accumsan metus. Curabitur porta tempor
                                  ante ac volutpat. Vivamus eu mi sed leo porta
                                  bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                              </div>
                              <div className="mt-10 mb-20 divider-line" />
                              <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                                <div className="leftPart">
                                  <div className="d-flex align-items-center userInfo">
                                    <div className="userThumb mr-10">
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/thumb-1.png" alt="logo" src="images/testimonial/thumb-1.png" />
                                    </div>
                                    <div className="content">
                                      <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram
                                      </h4>
                                      <p className="mb-0">Chief Executive Officer</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="rightPart">
                                  <span className>
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/addidas-logo.svg" alt="logo" src="images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item active" style={{width: '396.333px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner service-details-slider">
                              <div className="testimonialContent">
                                <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Nunc at magna sed nulla accumsan
                                  elementum sit amet ut mauris. Donec hendrerit pharetra nulla
                                  suscipit dapibus. Nulla rhoncus convallis dui
                                  in tristique. Nullam vel accumsan metus. Curabitur porta tempor
                                  ante ac volutpat. Vivamus eu mi sed leo porta
                                  bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                              </div>
                              <div className="mt-10 mb-20 divider-line" />
                              <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                                <div className="leftPart">
                                  <div className="d-flex align-items-center userInfo">
                                    <div className="userThumb mr-10">
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/thumb-1.png" alt="logo" src="images/testimonial/thumb-1.png" />
                                    </div>
                                    <div className="content">
                                      <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram
                                      </h4>
                                      <p className="mb-0">Chief Executive Officer</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="rightPart">
                                  <span className>
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/addidas-logo.svg" alt="logo" src="images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item active" style={{width: '396.333px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner service-details-slider">
                              <div className="testimonialContent">
                                <p className="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Nunc at magna sed nulla accumsan
                                  elementum sit amet ut mauris. Donec hendrerit pharetra nulla
                                  suscipit dapibus. Nulla rhoncus convallis dui
                                  in tristique. Nullam vel accumsan metus. Curabitur porta tempor
                                  ante ac volutpat. Vivamus eu mi sed leo porta
                                  bibendum. Donec vel consectetur orci, sed ullamcorper elit.”</p>
                              </div>
                              <div className="mt-10 mb-20 divider-line" />
                              <div className="d-flex justify-content-between align-items-center testimonialBtmArea">
                                <div className="leftPart">
                                  <div className="d-flex align-items-center userInfo">
                                    <div className="userThumb mr-10">
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/thumb-1.png" alt="logo" src="images/testimonial/thumb-1.png" />
                                    </div>
                                    <div className="content">
                                      <h4 className="fw-600 green-txt-color mb-0">Sarvesh Sriram
                                      </h4>
                                      <p className="mb-0">Chief Executive Officer</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="rightPart">
                                  <span className>
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="images/testimonial/addidas-logo.svg" alt="logo" src="images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span><i className="fa-light fa-arrow-left" /></span></button><button type="button" role="presentation" className="owl-next disabled"><span><i className="fa-light fa-arrow-right" /></span></button></div>
                  <div className="owl-dots disabled" />
                </div>
              </div>
            </div>
          </section> */}
          <section className="positive-impact-sec pt-80 pb-80"  id="getInTouch" style={{background: `url(${TouchLogo}) no-repeat center center/cover`}}>
            <div className="container">
              <div className="positive-impact-inner">
                <h3 className="block-title white-txt-color fw-400 title">Ready to Make a Positive Impact?</h3>
                <p className="white-txt-color mb-20">Your commitment to a better world inspires us.<br />
                  Partner with us and let's amplify your impact together.</p>
                <Link href="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
                  <span className="txt">Get Started</span>
                  <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                </Link>
              </div>
            </div>
          </section>
          {/* <section className="pt-50 pb-60 homeSubscribeSec">
            <div className="container">
              <div className="homeSubscribeSecinner">
                <div className="text-center homeSubscribeContent">
                  <div className="icon mb-25">
                    <img className="img-fluid lazyloaded" data-src="images/icon/newsletter-icon.svg" alt="logo" src="images/icon/newsletter-icon.svg" />
                  </div> 
                  <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news, insightful<br /> expert analysis,
                    and practical tips—delivered straight to your inbox. </h4>
                  <a href="#" className="custome-btn subscribe-btn">
                    <span className="txt">Subscribe Now!</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="images/icon/right-arrow-2.svg" alt="logo" src="images/icon/right-arrow-2.svg" /></span>
                  </a>
                </div>  
              </div>
            </div>
          </section> */}
        </main>
      );
    };
export default CurrentSituationAnalysis;    
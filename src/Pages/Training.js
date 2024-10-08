import { useState, useEffect, useRef } from "react";
import TrainingBackground from "../images/service/training-banner.png";
import TrainingMobile from "../images/service/training-banner-mobile.png";
import { Link } from "react-router-dom";
import RightArrow2 from "../images/icon/right-arrow-2.svg";
import RightArrow from "../images/icon/right-arrow.svg";
import Meet from "../images/service/meet-img.png";
import ChooseIcon from "../images/service/choose-icon.png";
import ChooseIcon2 from "../images/service/choose-icon2.png";
import ChooseIcon3 from "../images/service/choose-icon3.png";
import ChooseIcon4 from "../images/service/choose-icon4.png";
import TouchLogo from "../images/bg/getInTouch-bg.webp";
import ClientStories from "../components/ClientStories";
const Training = ({setDisplayForm}) =>{

  const elementRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const [selectDropDown, setSelectedDropDown] = useState("CAP");
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const handleDropDownClick = (dropdownId) => {
    if (selectDropDown === dropdownId && displayDropDown) {
      // If the same dropdown is clicked twice, close it (double-click behavior)
      setDisplayDropDown(false);
      setSelectedDropDown(""); 
    } else {
      // Otherwise, open the clicked dropdown and close the previously opened one
      setSelectedDropDown(dropdownId);
      setDisplayDropDown(true);
    }
  };
  
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
  
        <main>
          <section className="service-details-banner" style={{background: `url(${TrainingBackground}) no-repeat center center/cover`}}>
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="homePageBannerSecinner" style={{padding:"10px",minHeight: isHidden?"490px":"582px"}}>
                <div className="homePageBannerContent">
                  <h1 className="fw-300 mb-20">Training</h1>
                  <p>We offer tailor-made training (self-paced virtual, online, or on-site / on-the-job)</p>
                  <Link to="/contact-us" className="custome-btn" target="_blank">
                    <span className="txt">Get Started</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </Link>
                  <div className="service-mobile-img">
                    <div className="service-mobile-imginner"> 
                      <img src={TrainingMobile} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="meet-sec pt-30">
            <div className="container" >
              <div className="meet-inner-sec">
                <div className="meet-inner-header-sec">
                  <h3 className="mav-20 fw-400 block-title">We can help your<br /> organization meet</h3>
                </div>
                <div className="row align-items-center pt-20">
                  <div className="col-lg-6">
                    <div className="meet-left">
                      <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#tabOne" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">CAP and MAP <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#tabTwo" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Due Diligence <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#tabthree" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">ESG Standards and Implementation <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#tabFour" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Legal and Code of Conduct Requirements <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#tabFive" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Reporting <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></button>
                          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#tabSix" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Worker Management Dialogue <img className="img-fluid ls-is-cached lazyloaded" src={RightArrow} alt="logo" /></button>    
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meet-right">
                      <div className="tab-content meet-accordian" id="v-pills-tabContent">
                        <div className={`tab-pane fade show active meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "CAP"?"curent":""}`} id="tabOne" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("CAP");}}>
                              <h4>CAP and MAP</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>For brands/agents/importers/factories/farms/mines: We help equip your team and/or your suppliers with the
                                knowledge and skills to effectively implement CAPs and MAPs, enhancing ESG compliance performance.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                <h5 className="mb-0">Client Success Stories</h5>
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
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "DD"?"curent":""}`} id="tabTwo" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("DD");}}>
                              <h4>Due Diligence</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>For brands/agents/importers: We help enable your team and/or your suppliers to understand, mitigate,
                                and manage ESG risks cost-effectively.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                <h5 className="mb-0">Client Success Stories</h5>
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
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "DD"?"curent":""}`} id="tabthree" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("DD");}}>
                              <h4>ESG Standards and Implementation</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>For brands/agents/importers/factories/farms/mines: We help ensure comprehensive understanding and 
                                efficient implementation of ESG standards and codes of conduct across your organization and supply
                                chain, clarifying expectations and promoting best practices.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                <h5 className="mb-0">Client Success Stories</h5>
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
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "LCD"?"curent":""}`} id="tabFour" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("LCD");}}>
                              <h4>Legal and Code of Conduct Requirements</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>For brands/agents/importers/factories/farms/mines: We ensure your teams and/or suppliers understand
                                the code of conduct obligations and legal requirements, what is expected of you and how to best implement
                                good practice in an efficient way.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                <h5 className="mb-0">Client Success Stories</h5>
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
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "REP"?"curent":""}`} id="tabFive" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("REP");}}>
                              <h4>Reporting</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>For brands/agents/importers/factories/farms/mines We empower you and your suppliers to understand what data
                                to collect, how to implement programs to achieve and set targets, identify material issues, and meet reporting
                                expectations and legal and customer obligations.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                <h5 className="mb-0">Client Success Stories</h5>
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
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "WMG"?"curent":""}`} id="tabSix" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("WMG");}}>
                              <h4>Worker Management Dialogue</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>For factories/farms/mines: We help you improve factory performance, lower worker turnover, and improve 
                                overall morale through the implementation of best practices for worker-management dialogue processes… </p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec"> 
                                <h5 className="mb-0">Client Success Stories</h5>
                                <div className="ml-10 custom-owl-nav custom-owl-nav-6" />                                            
                              </div>         
                              <div className="successStoriesSliderArea">
                                <div className="successStoriesSlider successStoriesSlider-6 owl-carousel">
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
                  <Link to="/contact-us" className="custome-btn" target="_blank">
                    <span className="txt">Contact Us</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="homeSubscribeSec why-choose-sec pt-80 pb-30">
            <div className="container">
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
                  <Link to="/contact-us" className="custome-btn" target="_blank">
                    <span className="txt">Contact Us</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <ClientStories/>
          <section className="positive-impact-sec pt-80 pb-80"  id="getInTouch" style={{background: `url(${TouchLogo}) no-repeat center center/cover`}}>
            <div className="container">
              <div className="positive-impact-inner">
                <h3 className="block-title white-txt-color fw-400 title">Ready to Make a Positive Impact?</h3>
                <p className="white-txt-color mb-20">Your commitment to a better world inspires us.<br />
                  Partner with us and let's amplify your impact together.</p>
                <Link to="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
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
                    <img className="img-fluid lazyloaded" data-src="<?=$base_url?>images/icon/newsletter-icon.svg" alt="logo" src="<?=$base_url?>images/icon/newsletter-icon.svg" />
                  </div> 
                  <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news, insightful<br /> expert analysis,
                    and practical tips—delivered straight to your inbox. </h4>
                  <a href="#" className="custome-btn subscribe-btn">
                    <span className="txt">Subscribe Now!</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="<?=$base_url?>images/icon/right-arrow-2.svg" alt="logo" src="<?=$base_url?>images/icon/right-arrow-2.svg" /></span>
                  </a>
                </div>  
              </div>
            </div>
          </section> */}
        </main>
      );
    };
export default Training;   
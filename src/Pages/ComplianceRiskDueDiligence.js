import { useState, useEffect, useRef } from "react";

const ComplianceRiskDueDiligence = ({setDisplayForm}) =>{
    const elementRef = useRef(null);
    const [isHidden, setIsHidden] = useState(false);
    const [selectDropDown, setSelectedDropDown] = useState("GAP");
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
  
        <main ref={elementRef}>
          <section className="service-details-banner" data-background="https://apexxcapital.co/images/service/compliance-risk-due-diligence-banner.png" style={{backgroundImage: 'url("https://apexxcapital.co/images/service/compliance-risk-due-diligence-banner.png")'}}>
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="homePageBannerSecinner" style={{padding:'10px',minHeight: isHidden?"490px":"582px"}}>
                <div className="homePageBannerContent">
                  <h1 className="fw-300 mb-20">Compliance, Risk, &amp; <br /> Due diligence </h1>
                  <p>We help you identify, assess, and mitigate ESG risks across your supply chain, ensuring compliance with evolving regulations and industry standards.</p>
                  <a onClick={()=>setDisplayForm(true)} className="custome-btn" >
                    <span className="txt" >Get Started</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow-2.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow-2.svg" /></span>
                  </a>
                  <div className="service-mobile-img">
                    <div className="service-mobile-imginner"> 
                      <img src="https://apexxcapital.co/images/service/compliance-risk-due-diligence-banner-mobile.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="meet-sec pt-30">
            <div className="container">
              <div className="meet-inner-sec">
                <div className="meet-inner-header-sec">
                  <h3 className="mav-20 fw-400 block-title">We can help your<br /> organization meet</h3>
                </div>
                <div className="row align-items-center pt-20">
                  <div className="col-lg-6">
                    <div className="meet-left">
                      <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#tabOne" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">GAP Analysis <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow.svg" /></button>
                          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#tabTwo" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" tabIndex={-1}>Due Diligence Systems <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow.svg" /></button>
                          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#tabthree" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" tabIndex={-1}>Supply Chain Risk Assessment <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow.svg" /></button>
                          <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#tabFour" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" tabIndex={-1}>Supply Chain ESG Risk Management <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow.svg" /></button>
                          <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#tabFive" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" tabIndex={-1}>Reporting <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow.svg" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meet-right">
                      <div className="tab-content meet-accordian" id="v-pills-tabContent">
                        <div className={`tab-pane fade show active meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "GAP"?"curent":""}`}id="tabOne" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("GAP");}}>
                              <h4>GAP Analysis</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>We identify and address gaps between your current practices and evolving legal
                                requirements (EUDR, CSDDD, LkSG, NTA, CSRD/ESRS, UFLPA, Modern Slavery Acts...)
                                in your operational, target, or supply chain countries.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec d-none"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-1 disabled"><button type="button" role="presentation" className="owl-prev disabled"><span><i className="fa-light fa-angle-left" /></span></button><button type="button" role="presentation" className="owl-next disabled"><span><i className="fa-light fa-angle-right" /></span></button></div>                                            
                              </div>         
                              <div className="successStoriesSliderArea d-none">
                                <div className="successStoriesSlider successStoriesSlider-1 owl-carousel owl-loaded owl-drag">
                                  <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all'}}><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div></div></div><div className="owl-dots disabled" /></div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "DDS"?"curent":""}`} id="tabTwo" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("DDS");}}>
                              <h4>Due Diligence Systemss</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>We provide tailor-made assessments with recommendations for implementing due 
                                diligence processes and systems, such as supply chain mapping, forced labor, chain of custody, IRMA...</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec d-none"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-2 disabled"><button type="button" role="presentation" className="owl-prev disabled"><span><i className="fa-light fa-angle-left" /></span></button><button type="button" role="presentation" className="owl-next disabled"><span><i className="fa-light fa-angle-right" /></span></button></div>                                            
                              </div>         
                              <div className="successStoriesSliderArea d-none">
                                <div className="successStoriesSlider successStoriesSlider-2 owl-carousel owl-loaded owl-drag">
                                  <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all'}}><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div></div></div><div className="owl-dots disabled" /></div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "SRA"?"curent":""}`} id="tabthree" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{ handleDropDownClick("SRA");}}>
                              <h4>Supply Chain Risk Assessment</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>We conduct detailed reviews and implementation of your risk assessments in
                                your supply chain to ensure you know your sourcing locations, risks, and how
                                to manage them within the OECD Framework for Business.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec d-none"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-3 disabled"><button type="button" role="presentation" className="owl-prev disabled"><span><i className="fa-light fa-angle-left" /></span></button><button type="button" role="presentation" className="owl-next disabled"><span><i className="fa-light fa-angle-right" /></span></button></div>                                            
                              </div>         
                              <div className="successStoriesSliderArea d-none">
                                <div className="successStoriesSlider successStoriesSlider-3 owl-carousel owl-loaded owl-drag">
                                  <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all'}}><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div></div></div><div className="owl-dots disabled" /></div>  
                              </div>
                            </div>               
                          </div>
                        </div>
                        <div className={`tab-pane fade meet-accordian-item ${isHidden && displayDropDown  &&selectDropDown === "SRM"?"curent":""}`} id="tabFour" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                          <div className="meet-right-box">
                            <div className="meet-accordian-header" onClick={()=>{handleDropDownClick("SRM"); }}>
                              <h4>Supply Chain ESG Risk Management</h4>
                            </div>
                            <div className="meet-accordian-body">
                              <p>We efficiently manage the ESG risks in your supply chain to meet customer and
                                legal requirements, mitigating, preventing, and managing your ESG risks.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec d-none"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-4 disabled"><button type="button" role="presentation" className="owl-prev disabled"><span><i className="fa-light fa-angle-left" /></span></button><button type="button" role="presentation" className="owl-next disabled"><span><i className="fa-light fa-angle-right" /></span></button></div>                                            
                              </div>         
                              <div className="successStoriesSliderArea d-none">
                                <div className="successStoriesSlider successStoriesSlider-4 owl-carousel owl-loaded owl-drag">
                                  <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all'}}><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div></div></div><div className="owl-dots disabled" /></div>  
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
                              <p>We provide "assurance-ready" reporting support, empowering you to report confidently
                                to stakeholders and customers, meet legal obligations, and accelerate sustainability/ESG
                                performance, including cost-effective data collection and management.</p>
                              <div className="mb-10 d-flex align-items-center meet-right-box-title-sec d-none"> 
                                {/* <h5 className="mb-0">Client Success Stories</h5> */}
                                <div className="ml-10 custom-owl-nav custom-owl-nav-5 disabled"><button type="button" role="presentation" className="owl-prev disabled"><span><i className="fa-light fa-angle-left" /></span></button><button type="button" role="presentation" className="owl-next disabled"><span><i className="fa-light fa-angle-right" /></span></button></div>                                            
                              </div>         
                              <div className="successStoriesSliderArea d-none">
                                <div className="successStoriesSlider successStoriesSlider-5 owl-carousel owl-loaded owl-drag">
                                  <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all'}}><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div><div className="owl-item"><div className="meet-right-slider-box">
                                          <img src="https://apexxcapital.co/images/service/meet-img.png" alt="" />
                                          <div className="meet-right-slider-box-inner">
                                            <p>How this footwear brand reduced its carbon footprint</p>
                                          </div>
                                        </div></div></div></div><div className="owl-dots disabled" /></div>  
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
                  <a  className="custome-btn" onClick={()=>setDisplayForm(true)} >
                    <span className="txt">Contact Us</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow-2.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow-2.svg" /></span>
                  </a>
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
                            <img src="https://apexxcapital.co/images/service/choose-icon.png" alt="" />
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
                            <img src="https://apexxcapital.co/images/service/choose-icon2.png" alt="" />
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
                            <img src="https://apexxcapital.co/images/service/choose-icon3.png" alt="" />
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
                            <img src="https://apexxcapital.co/images/service/choose-icon4.png" alt="" />
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
                  <a  className="custome-btn" onClick={()=>setDisplayForm(true)}>
                    <span className="txt">Contact Us</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow-2.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow-2.svg" /></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-80 pb-60 testimonialSec" style={{display: 'none'}}>
            <div className="container">
              <div className="mb-40 text-center testimonialHeader">
                <h3 className="block-title fw-400 mb-10">What Our Clients Are Saying about Us</h3>
              </div>
              <div className="testimonialSecinner">
                <div className="testimonialSlider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all', width: '34px'}}>
                      <div className="owl-item active" style={{width: '0px', marginRight: '20px'}}>
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
                                      <img className="img-fluid lazyload" data-src="https://apexxcapital.co/images/testimonial/thumb-1.png" alt="logo" />
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
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" alt="logo" src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item active" style={{width: '0px', marginRight: '20px'}}>
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
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/thumb-1.png" alt="logo" src="https://apexxcapital.co/images/testimonial/thumb-1.png" />
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
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" alt="logo" src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item active" style={{width: '0px', marginRight: '20px'}}>
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
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/thumb-1.png" alt="logo" src="https://apexxcapital.co/images/testimonial/thumb-1.png" />
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
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" alt="logo" src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{width: '0px', marginRight: '20px'}}>
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
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/thumb-1.png" alt="logo" src="https://apexxcapital.co/images/testimonial/thumb-1.png" />
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
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" alt="logo" src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{width: '0px', marginRight: '20px'}}>
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
                                      <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/thumb-1.png" alt="logo" src="https://apexxcapital.co/images/testimonial/thumb-1.png" />
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
                                    <img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" alt="logo" src="https://apexxcapital.co/images/testimonial/addidas-logo.svg" />
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
                  <div className="owl-nav"><button type="button" role="presentation" className="owl-prev disabled"><span><i className="fa-light fa-arrow-left" /></span></button><button type="button" role="presentation" className="owl-next"><span><i className="fa-light fa-arrow-right" /></span></button></div><div className="owl-dots disabled" /></div>
              </div>
            </div>
          </section>
          <section className="positive-impact-sec pt-80 pb-80" data-background="https://apexxcapital.co/images/bg/getInTouch-bg.webp" id="getInTouch" style={{backgroundImage: 'url("https://apexxcapital.co/images/bg/getInTouch-bg.webp")'}}>
            <div className="container">
              <div className="positive-impact-inner">
                <h3 className="block-title white-txt-color fw-400 title">Ready to Make a Positive Impact?</h3>
                <p className="white-txt-color mb-20">Your commitment to a better world inspires us.<br />
                  Partner with us and let's amplify your impact together.</p>
                <a  className="custome-btn" onClick={()=>setDisplayForm(true)} >
                  <span className="txt">Get Started</span>
                  <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow-2.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow-2.svg" /></span>
                </a>
              </div>
            </div>
          </section>
          <section className="pt-50 pb-60 homeSubscribeSec d-none">
            <div className="container">
              <div className="homeSubscribeSecinner">
                <div className="text-center homeSubscribeContent">
                  <div className="icon mb-25">
                    <img className="img-fluid lazyloaded" data-src="https://apexxcapital.co/images/icon/newsletter-icon.svg" alt="logo" src="https://apexxcapital.co/images/icon/newsletter-icon.svg" />
                  </div> 
                  <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news, insightful<br /> expert analysis,
                    and practical tips—delivered straight to your inbox. </h4>
                  <a href="#" className="custome-btn subscribe-btn">
                    <span className="txt">Subscribe Now!</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="https://apexxcapital.co/images/icon/right-arrow-2.svg" alt="logo" src="https://apexxcapital.co/images/icon/right-arrow-2.svg" /></span>
                  </a>
                </div>  
              </div>
            </div>
          </section>
          {/* Popup Modal */}
        </main>
      );
    }
    export default ComplianceRiskDueDiligence;
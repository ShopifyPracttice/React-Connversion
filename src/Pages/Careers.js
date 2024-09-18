import { useState, useEffect, useRef } from "react";
import LocationIcon2 from "../images/icon/location-icon-2.svg";
import CareerImageA from "../images/career/career-img-a.png";
import CareerImage1 from "../images/career/leadership-img1.png";
import GreenLocation from "../images/career/green-location.png";
import PurpalLocation from "../images/career/parpal-location.png";
import LinkedInLogo1 from "../images/icon/linkedin-2.png";
import CareerImage2 from "../images/career/leadership-img2.png";
import LeftIcon from "../images/icon/left-angle.svg";
import RightIcon from "../images/icon/right-angle.svg";
import CareerImage3 from "../images/career/leadership-img3.png";
import CareerImage4 from "../images/career/leadership-img4.png";
import CareerImage5 from "../images/career/leadership-img5.png";
import Slider from 'react-slick';
import WorldMap from "../images/career/map.png";
import { Link } from "react-router-dom";
import Homeicon from "../images/icon/home-icon.png";
import RightArrow from "../images/icon/right-arrow.svg";
import JoinUs from "../images/career/join-us-img.png";
import JoinUs2 from "../images/career/join-us-img-2.png";
import JoinUs3 from "../images/career/join-us-img3.png";

// import RightArrow2 from "../images/icon/right-arrow-2.svg";
import TimeIcon from "../images/icon/time-icon-2.svg";
import BlueArrow from "../images/icon/blue-arrow.png";
const Career = ()=>{
  const elementRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  // const elementRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setIsRemove(width <= 574);
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
  

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setIsHidden(width <= 700);
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
  const settings = {
    dots: false,  // No bullets
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 2,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
       breakpoint: 745,
       settings:{
        slidesToShow: 2,
       }
      },
      {
        breakpoint: 600, // Screen width less than 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  }; 
  return (
<main ref={elementRef}>  
        <section className="blog-header">
          <div className="container" style={{maxWidth:'95%'}}>
            <div className="blog-header-inner">
              <ul>
                <li><Link to="/"><img src={Homeicon} alt="" /></Link></li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="resoueces-sec career-banner-sec pt-40 pb-40">
        <div className="container" style={{maxWidth:"95%"}}>
          <div className="resources-inner">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="resources-left">
                  <h1 className="mav-20 fw-300 block-title">Join Us in<br /> Making an Impact!</h1>
                  <p className="mb-25 text">Discover a workplace that values your unique talents<br /> and empowers
                    you to make a positive impact!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="career-right" style={{width:"100%"}}>
                  <div className="career-banner-thumnail">
                    {/* <img src="images/career/career-img-1.png" alt="" class="career-img1">
                                    <img src="images/career/career-img-2.png" alt="" class="career-img2">
                                    <img src="images/career/career-img-3.png" alt="" class="career-img3">
                                    <img src="images/career/career-img-4.png" alt="" class="career-img4"> */}
                    <img src={CareerImageA} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-sec pb-20">
        <div className="container" style={{maxWidth:"95%"}}>
          <div className="position-inner">
            <h2>Open Positions</h2>
            <div className="position-bottom pt-30">
              <div className="row">
                <div className="col-lg-4">
                  <div className="position-box">
                    <Link to="#">
                      <div className="position-right">
                        <h3>Customer Support Executive</h3>
                        <ul>
                          <li>
                            <img src={LocationIcon2} alt="" />
                            <span className="txt">India - Remote</span>
                          </li>
                          <li>
                            <img src={TimeIcon} alt="" />
                            <span className="txt">Full Time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="postion-left">
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-box">
                    <Link to="#">
                      <div className="position-right">
                        <h3>Customer Support Executive</h3>
                        <ul>
                          <li>
                            <img src={LocationIcon2} alt="" />
                            <span className="txt">India - Remote</span>
                          </li>
                          <li>
                            <img src={TimeIcon} alt="" />
                            <span className="txt">Full Time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="postion-left">
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src={RightArrow} alt="logo" src={RightArrow} /></span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-box">
                    <Link to="#">
                      <div className="position-right">
                        <h3>Customer Support Executive</h3>
                        <ul>
                          <li>
                            <img src={LocationIcon2} alt="" />
                            <span className="txt">India - Remote</span>
                          </li>
                          <li>
                            <img src={TimeIcon} alt="" />
                            <span className="txt">Full Time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="postion-left">
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src={RightArrow} alt="logo" src={RightArrow} /></span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-box">
                    <Link to="#">
                      <div className="position-right">
                        <h3>Customer Support Executive</h3>
                        <ul>
                          <li>
                            <img src={LocationIcon2} alt="" />
                            <span className="txt">India - Remote</span>
                          </li>
                          <li>
                            <img src={TimeIcon} alt="" />
                            <span className="txt">Full Time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="postion-left">
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src={RightArrow} alt="logo" src={RightArrow} /></span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-box">
                    <Link to="#">
                      <div className="position-right">
                        <h3>Customer Support Executive</h3>
                        <ul>
                          <li>
                            <img src={LocationIcon2} alt="" />
                            <span className="txt">India - Remote</span>
                          </li>
                          <li>
                            <img src={TimeIcon} alt="" />
                            <span className="txt">Full Time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="postion-left">
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src={RightArrow} alt="logo" src={RightArrow} /></span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-box">
                    <Link to="#">
                      <div className="position-right">
                        <h3>Customer Support Executive</h3>
                        <ul>
                          <li>
                            <img src={LocationIcon2} alt="" />
                            <span className="txt">India - Remote</span>
                          </li>
                          <li>
                            <img src={TimeIcon} alt="" />
                            <span className="txt">Full Time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="postion-left">
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src={RightArrow} alt="logo" src={RightArrow} /></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="green-bg-color trustedSec careerJoinUsSec">
        <div className="container" style={{maxWidth:"95%"}}>
          <div className="global-join-sec careerJoinUsSecinner">
            <h3>Build a Fulfilling Career as a Consultant</h3>
            <p>Join VECTRA International and enable positive impact in global supply chains.</p>
            <Link to="#" className="custome-btn bg-white" target="_blank">
              <span className="txt">Explore All</span>
              <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={BlueArrow} /></span>
            </Link>
          </div>
        </div>
      </section>
      <section className="join-us-sec pt-40 pb-40">
        <div className="container" style={{maxWidth:"95%"}}>
          <div className="join-us-inner">
            <h2 className="text-center mb-30">Why Join Us?</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="join-us-box">
                  <img src={JoinUs} alt="" />
                  <div className="join-us-overlay">
                    <div className="join-us-overlay-inner">
                      <h5>Work Remotely</h5>
                      <p>Enjoy the flexibility of remote work. Work from wherever inspires you.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="join-us-box">
                  <img src={JoinUs2} alt="" />
                  <div className="join-us-overlay">
                    <div className="join-us-overlay-inner">
                      <h5>Drive Change</h5>
                      <p>Let's enable positive impact.
                        Join our mission-driven team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="join-us-box">
                  <img src={JoinUs3} alt="" />
                  <div className="join-us-overlay">
                    <div className="join-us-overlay-inner">
                      <h5>Be Heard</h5>
                      <p>At VECTRA, everyone is an equal, and every voice is valued.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-vission-sec pb-50">
            <div className="container" style={{maxWidth:"95%"}}>
              <div className="mission-inner">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mission-box">
                      <h4>Our Mission</h4>
                      <p>We positively impact businesses, their workers <br />and communities by helping to
                        create better, more <br />efficient supply chain workplaces.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mission-box">
                      <h4>Our Vision</h4>
                      <p>VECTRA International will empower businesses, workers, and communities through
                        innovative, tailor-made solutions that build resilient and efficient supply chains
                        for a sustainable future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="value-sec pt-32 pb-50">
            <div className="container" style={{maxWidth:"95%"}}>
              <div className="value-inner">
                <h2 className="text-center mb-30">VECTRA Values</h2>
                <div className="values-row">
                  <div className="value-box left-border">
                    <div className="value-icon yellow">V</div>
                    <div className="border" />
                    <div className="value-cont">
                      <h4>Values</h4>
                      <p>Our work is founded on principles such as respect, inclusivity, honesty, commitment,
                        and trust.</p>
                    </div>
                  </div>
                  <div className="value-box right-border">
                    <div className="value-cont">
                      <h4>Ethics</h4>
                      <p>We lead by example, promoting behaviors that do no harm, so we can do good.</p>
                    </div>
                    <div className="border" />
                    <div className="value-icon red">E</div>
                  </div>
                  <div className="value-box left-border">
                    <div className="value-icon purple">C</div>
                    <div className="border" />
                    <div className="value-cont">
                      <h4>Community</h4>
                      <p>We recognize and value all stakeholders, including workers, their families,
                        workplaces, brands, and consumers.</p>
                    </div>
                  </div>
                  <div className="value-box right-border">
                    <div className="value-cont">
                      <h4>Transparency</h4>
                      <p>We are straightforward about what we want to achieve, and how we work.</p>
                    </div>
                    <div className="border" />
                    <div className="value-icon blue">T</div>
                  </div>
                  <div className="value-box left-border">
                    <div className="value-icon green">R</div>
                    <div className="border" />
                    <div className="value-cont">
                      <h4>Rights</h4>
                      <p>We uphold the Universal Declaration of Human Rights.</p>
                    </div>
                  </div>
                  <div className="value-box">
                    <div className="value-cont">
                      <h4>Action</h4>
                      <p>We believe dialogue is important, but to make a difference, change is necessary.</p>
                    </div>
                    <div className="border" />
                    <div className="value-icon yellow">A</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="leadership-sec pt-50 pb-50 litegreen">
      <div className="container" style={{maxWidth:"95%"}}>
        <div className="leadership-inner" >
          <h2 className="text-center mb-30">Our Leadership Team</h2>
          <Slider ref={sliderRef} {...settings} className="leadership-slider">
            <div className="leadership-box">
              <div className="leader-ship-inner">
                <img src={CareerImage1} alt="Patrick Neyts" />
                <h4 className="leadership-name">Patrick Neyts</h4>
                <span className="d-block mb-10 designation">CEO / Strategic Advisor</span>
                <p>Patrick Neyts is the Chief Executive Officer of VECTRA International, with over 30 years of experience in ESG programs, Corporate Codes, and Responsible Business practices across 11 industry sectors and 40 countries.</p>
                <ul className="leader-ship-social-links" style={{position:"absolute", bottom:"2%"}}>
                  <li><a href="#"><img src={LinkedInLogo1} alt="LinkedIn" className="linkdin-img" /></a></li>
                </ul>
              </div>
            </div>
            <div className="leadership-box">
              <div className="leader-ship-inner" style={{boxShadow:"0 2px 15px 0 rgb(0, 0, 0, 0.2)"}}>
                <img src={CareerImage2} alt="Mario Rusack van Rossum" />
                <h4 className="leadership-name">Mario Rusack van Rossum</h4>
                <span className="d-block mb-10 designation">Head of Global Sales</span>
                <p>Mario Rusack-van Rossum is the Global Sales Lead at VECTRA International, with over 20 years of global sales experience and a strong commitment to social causes. He is a dynamic sales expert who brings a wealth of knowledge and passion to the team.</p>
                <ul className="leader-ship-social-links" style={{}}>
                  <li><a href="#"><img src={LinkedInLogo1} alt="LinkedIn" className="linkdin-img" /></a></li>
                </ul>
              </div>
            </div>
            <div className="leadership-box">
                    <div className="leader-ship-inner" style={{boxShadow:"0 2px 15px 0 rgb(0, 0, 0, 0.2)"}}>
                      <img src={CareerImage3} alt="" />
                      <h4 className="leadership-name">Shalini Saini</h4>
                      <span className="d-block mb-10 designation">Head of Marketing and Communications</span>
                      <p>Shalini Saini is the Head of Marketing &amp; Communications at VECTRA International, with
                        over 15 years of public relations experience in the hospitality industry, leveraging
                        her dynamic leadership skills and business acumen from New Delhi, India.</p>
                      <ul className="leader-ship-social-links" style={{position:"absolute", bottom:"2%"}}>
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
            <div className="leadership-box">
                    <div className="leader-ship-inner" style={{boxShadow:"0 2px 15px 0 rgb(0, 0, 0, 0.2)"}}>
                      <img src={CareerImage4} alt="" />
                      <h4 className="leadership-name">Lorenz Berzau</h4>
                      <span className="d-block mb-10 designation">Head of Operations/ Senior Advisor</span>
                      <p>Lorenz Berzau is the Head of Operations at VECTRA International, based in Salvador,
                        Brazil, with a focus on sustainability strategy, human rights, and social
                        compliance, backed by 20 years of consultancy experience and a background in law.
                      </p>
                      <ul className="leader-ship-social-links" style={{position:"absolute", bottom:"2%"}}>
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  
            {/* Add more leadership-boxes as needed */}
          </Slider>
          <div className="btn-wrap" style={{display: isRemove ? "block":'none'}}>
            <button onClick={prevSlide} style={{ margin: '10px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
              <img src={LeftIcon}/>
            </button>
            <button onClick={nextSlide} style={{ margin: '10px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
              <img src={RightIcon}/>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="world-map pt-48 pb-48">
            <div className="container" style={{maxWidth:"95%"}}>
              <div className="world-map-inner">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="world-map-left">
                      <h2>A World of<br /> Experience</h2>
                      <ul>
                        <li><img src={GreenLocation} alt="ss" />VECTRA In-Country Presence
                        </li>
                        <li><img src={PurpalLocation} alt="" />VECTRA Coverage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="world-map-right">
                      <img src={WorldMap} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    }
export default Career;
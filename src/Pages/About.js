import { Link } from "react-router-dom";
import CareerImage1 from "../images/career/leadership-img1.png";
import GreenLocation from "../images/career/green-location.png";
import PurpalLocation from "../images/career/parpal-location.png";
import LinkedInLogo1 from "../images/icon/linkedin-2.png";
import CareerImage2 from "../images/career/leadership-img2.png";
import CareerImage3 from "../images/career/leadership-img3.png";
import CareerImage4 from "../images/career/leadership-img4.png";
import CareerImage5 from "../images/career/leadership-img5.png";
import Slider from 'react-slick';
import WorldMap from "../images/career/map.png";
import ResourceBlog from "../images/resources/resources-blog-img.png";
import ResourceBlog2 from "../images/resources/resources-blog-img2.png";
import ResourceBlog3 from "../images/resources/resources-blog-img3.png";
import VectorFram from "../images/vectra/vectra-fram.png";
import VectorFram2 from "../images/vectra/vectra-fram2.png";
import RightArrow2 from "../images/icon/right-arrow.svg";
import VectraImage from "../images/vectra/vectra-img.png";
import PressIcon from "../images/icon/press-icon.png";


const About = ({setDisplayForm}) =>{
    const settings = {
        dots: false,  // No bullets
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Number of slides to show at once
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
            breakpoint: 600, // Screen width less than 600px
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      return (
  
        <main>
          <section className="vectra-banner">
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="vectra-inner">
                <h1>About VECTRA International</h1>
              </div>
            </div>
          </section>
          <section className="vectra-img-cont pt-40 pb-40">
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="vectra-img-cont-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="vectra-cont">
                      <h3 className="block-title mb-15">The VECTRA Story</h3>
                      <p>We co-founded VECTRA International in 2005 to improve the lives of workers in supply
                        chains, for products and services, to enhance the lives of the people in the local
                        communities. Supply chains are where you can reach the most vulnerable people and
                        have the greatest impact to protect people.</p>
                      <p>We believe business can be a force for good. Our goal is to improve businesses'
                        performance while helping their workers. That’s why we created a logo with five
                        stakeholders (workers, workplaces, brand, community, and consumers) and embedded our
                        values in the VECTRA name: Values, Ethics, Community, Transparency, Rights, and
                        Action.</p>
                      <p>VECTRA’s mission is to positively impact businesses, their workers, and communities
                        by helping to create better and more efficient supply chain workplaces.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="vectra-img">
                      <img src={VectraImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mission-vission-sec pb-50">
            <div className="container" style={{maxWidth:"98%"}}>
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
            <div className="container" style={{maxWidth:"98%"}}>
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
        <div className="leadership-inner">
          <h2 className="text-center mb-30">Our Leadership Team</h2>
          <Slider {...settings} className="leadership-slider">
            <div className="leadership-box">
              <div className="leader-ship-inner">
                <img src={CareerImage1} alt="Patrick Neyts" />
                <h4 className="leadership-name">Patrick Neyts</h4>
                <span className="d-block mb-10 designation">CEO / Strategic Advisor</span>
                <p>Patrick Neyts is the Chief Executive Officer of VECTRA International, with over 30 years of experience in ESG programs, Corporate Codes, and Responsible Business practices across 11 industry sectors and 40 countries.</p>
                <ul className="leader-ship-social-links" style={{marginTop:'46px'}}>
                  <li><a href="#"><img src={LinkedInLogo1} alt="LinkedIn" className="linkdin-img" /></a></li>
                </ul>
              </div>
            </div>
            <div className="leadership-box">
              <div className="leader-ship-inner">
                <img src={CareerImage2} alt="Mario Rusack van Rossum" />
                <h4 className="leadership-name">Mario Rusack van Rossum</h4>
                <span className="d-block mb-10 designation">Head of Global Sales</span>
                <p>Mario Rusack-van Rossum is the Global Sales Lead at VECTRA International, with over 20 years of global sales experience and a strong commitment to social causes. He is a dynamic sales expert who brings a wealth of knowledge and passion to the team.</p>
                <ul className="leader-ship-social-links">
                  <li><a href="#"><img src={LinkedInLogo1} alt="LinkedIn" className="linkdin-img" /></a></li>
                </ul>
              </div>
            </div>
            <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage3} alt="" />
                      <h4 className="leadership-name">Shalini Saini</h4>
                      <span className="d-block mb-10 designation">Head of Marketing and Communications</span>
                      <p>Shalini Saini is the Head of Marketing &amp; Communications at VECTRA International, with
                        over 15 years of public relations experience in the hospitality industry, leveraging
                        her dynamic leadership skills and business acumen from New Delhi, India.</p>
                      <ul className="leader-ship-social-links" style={{marginTop:'10px'}}>
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
            <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage4} alt="" />
                      <h4 className="leadership-name">Lorenz Berzau</h4>
                      <span className="d-block mb-10 designation">Head of Operations/ Senior Advisor</span>
                      <p>Lorenz Berzau is the Head of Operations at VECTRA International, based in Salvador,
                        Brazil, with a focus on sustainability strategy, human rights, and social
                        compliance, backed by 20 years of consultancy experience and a background in law.
                      </p>
                      <ul className="leader-ship-social-links" style={{marginTop:'13px'}}>
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage5} alt="" />
                      <h4 className="leadership-name">Noyan Canbolat</h4>
                      <span className="d-block mb-10 designation">Head of Technology</span>
                      <p>Noyan Canbolat is the Head of Technology at VECTRA International, a passionate IT
                        professional with over 10 years of experience in software consulting for telecom,
                        banks, and finance sectors in Turkey, leading the development of innovative
                        cloud-based platforms.</p>
                      <ul className="leader-ship-social-links" style={{marginTop:"14px"}}>
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
            {/* Add more leadership-boxes as needed */}
          </Slider>
        </div>
      </div>
    </section>
          {/* <section className="leadership-sec pt-50 pb-50 litegreen">
            <div className="container">
              <div className="leadership-inner">
                <h2 className="text-center mb-30">Our Leadership Team</h2>
                <div className="leadership-slider">
                  <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage1} alt="" />
                      <h4 className="leadership-name">Patrick Neyts</h4>
                      <span className="d-block mb-10 designation">CEO / Strategic Advisor</span>
                      <p>Patrick Neyts is the Chief Executive Officer of VECTRA International, with over 30
                        years of experience in ESG programs, Corporate Codes, and Responsible Business
                        practices across 11 industry sectors and 40 countries.</p>
                      <ul className="leader-ship-social-links">
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage2} alt="" />
                      <h4 className="leadership-name">Mario Rusack van Rossum</h4>
                      <span className="d-block mb-10 designation">Head of Global Sales</span>
                      <p>Mario Rusack-van Rossum is the Global Sales Lead at VECTRA International, with over
                        20 years of global sales experience and a strong commitment to social causes. He is
                        a dynamic sales expert who brings a wealth of knowledge and passion to the team.</p>
                      <ul className="leader-ship-social-links">
                        <li><Link href="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage3} alt="" />
                      <h4 className="leadership-name">Shalini Saini</h4>
                      <span className="d-block mb-10 designation">Head of Marketing and Communications</span>
                      <p>Shalini Saini is the Head of Marketing &amp; Communications at VECTRA International, with
                        over 15 years of public relations experience in the hospitality industry, leveraging
                        her dynamic leadership skills and business acumen from New Delhi, India.</p>
                      <ul className="leader-ship-social-links">
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage4} alt="" />
                      <h4 className="leadership-name">Lorenz Berzau</h4>
                      <span className="d-block mb-10 designation">Head of Operations/ Senior Advisor</span>
                      <p>Lorenz Berzau is the Head of Operations at VECTRA International, based in Salvador,
                        Brazil, with a focus on sustainability strategy, human rights, and social
                        compliance, backed by 20 years of consultancy experience and a background in law.
                      </p>
                      <ul className="leader-ship-social-links">
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="leadership-box">
                    <div className="leader-ship-inner">
                      <img src={CareerImage5} alt="" />
                      <h4 className="leadership-name">Noyan Canbolat</h4>
                      <span className="d-block mb-10 designation">Head of Technology</span>
                      <p>Noyan Canbolat is the Head of Technology at VECTRA International, a passionate IT
                        professional with over 10 years of experience in software consulting for telecom,
                        banks, and finance sectors in Turkey, leading the development of innovative
                        cloud-based platforms.</p>
                      <ul className="leader-ship-social-links">
                        <li><Link to="#"><img src={LinkedInLogo1} alt="" className="linkdin-img" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap">
                  <button className="prev-btn"><img src={LeftIcon} className="img-fluid lazyload" alt="" /></button>
                  <button className="next-btn"><img src={RightIcon} className="img-fluid lazyload" alt="" /></button>
                </div>
              </div>
            </div>
          </section> */}
          <section className="world-map pt-48 pb-48">
            <div className="container" style={{maxWidth:"98%"}}>
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
          <section className="resources-blog-sec resources-blog-bg pt-60 pb-60 ">
            <div className="container" style={{maxWidth:"98%"}}>
              <div className="vectra-blog-img">
                <div className="resources-blog-inner">
                  <div className="resources-blog-headeing">
                    <img src={PressIcon} alt="" />
                    <p>Press Releases</p>
                  </div>
                  <Link to="/resources#press-releases" className="custome-btn" >
                    <span className="txt">Explore All</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </Link>
                </div>
                <div className="resources-blog-bottom pt-30">
                  <div className="row rowBox">
                    <div className="col-lg-4 columnBox mb-20">
                      <div className="resources-blog-box">
                        <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/%7Bpost-2024-47-21%2010:47:24-RESOURCE-p%7D/image01.jpg" alt="" />
                        <div className="resources-blog-box-inner">
                          {/* <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports</p> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-4 columnBox mb-20">
                      <div className="resources-blog-box">
                        <img src={ResourceBlog2} alt="" />
                        <div className="resources-blog-box-inner">
                          <p>Ways to know if your supplier is disposing plastic properly!</p>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-lg-4 columnBox mb-20">
                      <div className="resources-blog-box">
                        <img src={ResourceBlog3} alt="" />
                        <div className="resources-blog-box-inner">
                          <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="vectra-join-us-sec">
            <div className="vectra-join-us-inner">
              <div className="vectra-join-us-box">
                <img src={VectorFram} alt="" />
                <div className="vectra-join-us-inner-wrapper">
                  <div className="vectra-join-us-wrapper">
                    <p className="block-title">From strategy to transformation,<br /> we help businesses thrive. Get the<br /> support you need.</p>
                    <div className="vectra-join-us-right">
                      <Link to="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
                        <span className="txt">Contact Us</span>
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vectra-join-us-box">
                <img src={VectorFram2} alt="" />
                <div className="vectra-join-us-inner-wrapper">
                  <div className="vectra-join-us-wrapper">
                    <p className="block-title">Want to make a positive<br /> impact?</p>
                    <div className="vectra-join-us-right">
                      <Link to="#" onClick={()=>setDisplayForm(true)} className="custome-btn">
                        <span className="txt">Join Us</span>
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                      </Link>
                    </div>
                  </div>
                </div>
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
export default About;    
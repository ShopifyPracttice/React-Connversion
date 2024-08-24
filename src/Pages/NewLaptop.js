import { Link } from "react-router-dom";
import HomeIcon from "../images/icon/home-icon.png";
import RightArrow2 from "../images/icon/right-arrow-2.svg";
import BlogDetail from "../images/blog/blog-details-img.png";
import FeatureIcon from "../images/blog/feature-icon.png";
import FeatureIcon2 from "../images/blog/feature-icon-2.png";
import DoubleIcon2 from "../images/blog/double-icon2.png";
import DoubleIcon from "../images/blog/double-icon.png";
import NewsLetterIcon from "../images/icon/newsletter-icon.svg";
const NewLaptop = () =>{
return (
        <main>
          <section className="blog-header">
            <div className="container">
              <div className="blog-header-inner">
                <ul>
                  <li><Link to="#"><img src={HomeIcon} alt="" /></Link></li>
                  <li>Resources</li>
                  <li className="line-cap">Client Success Stories</li>
                  <li className="line-cap">Purchase a new laptop for personal use</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="law-sec pt-64 pb-64 homeSubscribeSec blog-details-banner-sec resources-blog-detais-banner-sec">
            <div className="container">
              <div className="law-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="law-left">
                      <h2 className="mb-20">Purchase a new laptop<br /> for personal use</h2>
                      <div className="laptop-row pb-20">
                        <div className="laptop-column">
                          <p>Industry</p>
                          <span>Household</span>
                        </div>
                        <div className="laptop-column">
                          <p>Type</p>
                          <span>Consumer</span>
                        </div>
                      </div>
                      <div className="share-sec">
                        <p className="mb-0">Share :</p>
                        <ul>
                          <li>
                            <Link to="#"><i className="fa-brands fa-facebook" /></Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa-brands fa-twitter" /></Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa-brands fa-instagram" /></Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa-brands fa-linkedin" /></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="law-right">
                      <img src={BlogDetail} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="introduction pt-60 pb-40 newLaptopIntroductionArea">
            <div className="container">
              <div className="introduction-inner">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tntroduction-left">
                      <h3>Challenges</h3>
                      <p>Analyze, determine, purchase, install and set up a highspeed processing laptop for gaming under 1,000 Euro
                      </p>
                      <h3>Solutions Offered by VECTRA International</h3>
                      <ul className="statement">
                        <li>Analyzed the laptop market across 11 brands within Belgium (result 47 laptops out 195)</li>
                        <li>Purchased best value for money laptop with 1Tf processor and 1M screen within 24 h</li>
                        <li>Setup of laptop and transition all data from previous model within 6h</li>
                        <li>Trained 3 teenagers how to responsibly use the laptop games within 6h</li>
                      </ul>
                      <div className="feature-icon mb-40">
                        <h3 className="mb-20">How we can help you!</h3>
                        <ul>
                          <li>
                            <div className="feature-icon-inner">
                              <div className="feature-right">
                                <div className="feature-icon">
                                  <img src={FeatureIcon} alt="" />
                                </div>
                              </div>
                              <div className="feature-cont">
                                <h4>Fast &amp; Effective Solutions</h4>
                                <p>Our agile approach delivers rapid results for maximum impact.</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="feature-icon-inner">
                              <div className="feature-right">
                                <div className="feature-icon">
                                  <img src={FeatureIcon2} alt="" />
                                </div>
                              </div>
                              <div className="feature-cont">
                                <h4>Customer Success at Our Core</h4>
                                <p>Your success is our focus. We're with you every step of the way.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="feature-icon-inner">
                              <div className="feature-right">
                                <div className="feature-icon">
                                  <img src={DoubleIcon2} alt="" />
                                </div>
                              </div>
                              <div className="feature-cont">
                                <h4>Tailored Strategies</h4>
                                <p>We create customized solutions that align with your specific goals and values.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="feature-icon-inner">
                              <div className="feature-right">
                                <div className="feature-icon">
                                  <img src={DoubleIcon} alt="" />
                                </div>
                              </div>
                              <div className="feature-cont">
                                <h4>Integrity &amp; Transparency </h4>
                                <p>We build trust through open communication and ethical practices.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="introduction-right stickey-sidebar">
                      <div className="getInTouchFormArea">
                        <h4 className="text-center title">Book a free 15 minute call with our expert</h4>
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
              </div>
            </div>
          </section>
          <section className="pt-50 pb-60 homeSubscribeSec">
            <div className="container">
              <div className="homeSubscribeSecinner">
                <div className="text-center homeSubscribeContent">
                  <div className="icon mb-25">
                    <img className="img-fluid lazyloaded"  alt="logo" src={NewsLetterIcon} />
                  </div> 
                  <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news, insightful<br /> expert analysis,
                    and practical tips—delivered straight to your inbox. </h4>
                  <Link href="#" className="custome-btn subscribe-btn">
                    <span className="txt">Subscribe Now!</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </Link>
                </div>  
              </div>
            </div>
          </section>
        </main>
      );
    };
export default NewLaptop;    
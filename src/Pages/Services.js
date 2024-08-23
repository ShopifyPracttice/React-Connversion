import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceImage from "../images/service/service-img.png";
import ArrowRight from "../images/icon/right-arrow.svg";
import { Link } from 'react-router-dom';
import ServiceImage2 from "../images/service/service-img-2.png";
import ServiceImage3 from "../images/service/service-img-3.png";
import ServiceImage4 from "../images/service/service-img-4.png";
import ServiceImage5 from "../images/service/service-img-5.png";
import ServiceImage6 from "../images/service/service-img-6.png";
import ContactForm from '../components/ContactForm';
const Services = () =>{

      return (
  
        <main>
          <section className="service-top pt-40 serviceListingSec" style={{paddingTop: '40px'}}>
            <div className="container">
              <div className="service-top-inner">
                <h1 className="mav-20 fw-400 block-title">Your Trusted Partner for<br /> End-to-End ESG Solutions</h1>
                <p>VECTRA International offers a complete suite of services to navigate the complex<br /> landscape of
                  ESG, from audits and due diligence to training and reporting.</p>
              </div>
              <div className="service-list-sec pt-20 pb-20">
                <div className="service-list-inner">
                  <div className="row rowBox">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 columnBox service-box-outer">
                      <div className="service-list-box">
                        <div className="service-list-box-img">
                          <Link to="/service-detail/current-situation-analysis" className><img src={ServiceImage} alt="" className="img-fluid lazyload" /></Link>
                        </div>
                        <div className="service-list-box-cont">
                          <Link to="/service-detail/current-situation-analysis" className>
                            <div className="service-left">
                              <h4>Current Situation<br />
                                Analysis</h4>
                            </div>
                            <div className="service-right">
                              <span className="linkArrow">
                                <img className="img-fluid ls-is-cached lazyloaded" src={ArrowRight} alt="logo"  />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 columnBox service-box-outer">
                      <div className="service-list-box">
                        <div className="service-list-box-img">
                          <Link to="/service-detail/site-performance-improvement"><img src={ServiceImage2} alt="" className="img-fluid lazyload" /></Link>
                        </div>
                        <div className="service-list-box-cont">
                          <Link to="/service-detail/site-performance-improvement" className>
                            <div className="service-left">
                              <h4>Site Performance<br /> Improvement</h4>
                            </div>
                            <div className="service-right">
                              <span className="linkArrow">
                                <img className="img-fluid ls-is-cached lazyloaded" src={ArrowRight} alt="logo"  />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 columnBox service-box-outer">
                      <div className="service-list-box">
                        <div className="service-list-box-img">
                          <Link to="/service-detail/compliance-risk-due-diligence"><img src={ServiceImage3} alt="" className="img-fluid lazyload" /></Link>
                        </div>
                        <div className="service-list-box-cont">
                          <Link to="/service-detail/compliance-risk-due-diligence" className>
                            <div className="service-left">
                              <h4>Compliance, Risk, <br />&amp; Due diligence </h4>
                            </div>
                            <div className="service-right">
                              <span className="linkArrow">
                                <img className="img-fluid ls-is-cached lazyloaded" src={ArrowRight}  alt="logo" />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 columnBox service-box-outer">
                      <div className="service-list-box">
                        <div className="service-list-box-img">
                          <Link to="/service-detail/independent-quality-assurance"> <img src={ServiceImage4} alt="" className="img-fluid lazyload" /></Link>
                        </div>
                        <div className="service-list-box-cont">
                          <Link  to="/service-detail/independent-quality-assurance" className>
                            <div className="service-left">
                              <h4>Independent<br /> Quality Assurance </h4>
                            </div>
                            <div className="service-right">
                              <span className="linkArrow">
                                <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={ArrowRight} />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 columnBox service-box-outer">
                      <div className="service-list-box">
                        <div className="service-list-box-img">
                          <Link to="/service-detail/training"><img src={ServiceImage5} alt="" className="img-fluid lazyload" /></Link>
                        </div>
                        <div className="service-list-box-cont">
                          <Link to="/service-detail/training" className>
                            <div className="service-left">
                              <h4>Training </h4>
                            </div>
                            <div className="service-right">
                              <span className="linkArrow">
                                <img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={ArrowRight} />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 columnBox service-box-outer">
                      <div className="service-list-box">
                        <div className="service-list-box-img">
                          <Link to="/service-detail/reporting"><img src={ServiceImage6} alt="" className="img-fluid lazyload" /></Link>
                        </div>
                        <div className="service-list-box-cont">
                          <Link href="<?=$base_url?>service-detail/reporting" className>
                            <div className="service-left">
                              <h4>Reporting</h4>
                            </div>
                            <div className="service-right">
                              <span className="linkArrow">
                                <img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={ArrowRight} />
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="pt-80 pb-80 getInTouchSec" data-background="images/bg/getInTouch-bg.webp">
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
                            <img className="img-fluid lazyload" data-src="images/icon/right-arrow-2.svg" alt="logo" />
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
        </main>
      );
    };
export default Services;    
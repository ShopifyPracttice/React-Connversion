import { Link } from "react-router-dom";
import SearchIcon from "../images/icon/search.svg";
import SortIcon from "../images/icon/sort-icon.png";
import ResourceImage2 from "../images/resources/resource-img-two-2.png";
import BlogIcon from "../images/icon/resources-blog-icon.png";
import RightArrow2 from "../images/icon/right-arrow.svg";
import RightArrow from "../images/icon/right-arrow-2.svg";
import NewsLetter from "../images/icon/newsletter-icon.svg";
import TouchLogo from "../images/bg/getInTouch-bg.webp";
import PressImage1 from "../images/resources/resources-blog-img.png";
import PressImage2 from "../images/resources/resources-blog-img2.png";
import PressImage3 from "../images/resources/resources-blog-img3.png";


const PressRelease = ({setIsOpen}) =>{
return (
  
        <main>
          <section className="resoueces-sec resoueces-listing-banner-sec pt-40 pb-100">
            <div className="container">
              <div className="resources-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="resources-left">
                      <h1 className="mav-20 fw-300 block-title">Resources</h1>
                      <p className="mb-25 text">Stay informed about what’s happening in the world of ESG through
                        our latest blogs, press releases, Client Success Stories, and eBooks</p>
                      <div className="resources-input-sec">
                        <div className="resources-input-box">
                          <input type="text" placeholder="Search Something" />
                          <button type="submit">
                            <img src={SearchIcon} alt="" />
                          </button>
                        </div>
                        <Link href="#" className="ml-10 sort">
                          <img src={SortIcon} alt="" />
                          Sort by
                        </Link>
                        <div className="ml-10 footer_bottomRightArea">
                          <div className="resource-select-menu">
                            <select className="select">
                              <option selected>Recent</option>
                              <option value="West Bengal">Popularity</option>
                              <option value="Bihar">PF</option>
                              <option value="Chitagong">DE</option>
                              <option value="Khatmandu">TR</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="resources-right">
                      {/* <img data-src="images/resources/resources-img.svg" class="img-fluid lazyload" alt=""> */}
                      <img src={ResourceImage2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="resources-blog-sec resoueces-listing-sec pt-0 pb-30" style={{display: 'none'}}>
            <div className="container">
              <div className="container-wrapper">
                <div className="resources-blog-inner">
                  <div className="resources-blog-headeing">
                    <img src={BlogIcon} alt="" />
                    <p>Blogs</p>
                  </div>
                  <a href="#" className="custome-btn" target="_blank">
                    <span className="txt">Explore All</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </a>
                </div>
                <div className="resources-blog-bottom pt-30">
                  <div className="row rowBox" id="resources-container">
                    {/*<div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img2.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Ways to know if your supplier is disposing plastic properly!</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img3.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img2.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Ways to know if your supplier is disposing plastic properly!</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img3.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>*/}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="resources-blog-sec pt-50 pb-30 homeSubscribeSec" style={{display: 'none'}}>
            <div className="container">
              <div className="container-wrapper">
                <div className="resources-blog-inner">
                  <div className="resources-blog-headeing">
                    <img src="images/icon/book-icon.png" alt="" />
                    <p>Client Success Stories</p>
                  </div>
                  <Link to="#" className="custome-btn" target="_blank">
                    <span className="txt">Explore All</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></span>
                  </Link>
                </div>
                <div className="resources-blog-bottom pt-30">
                  {/*<div class="row">
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img2.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Ways to know if your supplier is disposing plastic properly!</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img3.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img2.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>Ways to know if your supplier is disposing plastic properly!</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                                  <div class="custome-column-boxinner">
                                      <div class="resources-blog-box">
                                          <div class="custome-thumb">
                                              <img src="images/resources/resources-blog-img3.png" alt="">
                                          </div>
                                          <div class="resources-blog-box-inner">
                                              <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>*/}
                </div>
              </div>
            </div>
          </section>
          <section className="resources-blog-sec pt-30 pb-30" style={{display: 'none'}}>
            <div className="container">
              <div className="container-wrapper">
                <div className="resources-blog-inner">
                  <div className="resources-blog-headeing">
                    <img src="images/icon/open-book-icon.png" alt="" />
                    <p>eBooks</p>
                  </div>
                  <a href="#" className="custome-btn" target="_blank">
                    <span className="txt">Explore All</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="images/icon/right-arrow-2.svg" alt="logo" src="images/icon/right-arrow.svg" /></span>
                  </a>
                </div>
                <div className="resources-blog-bottom pt-30">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src="images/resources/resources-blog-img.png" alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src="images/resources/resources-blog-img2.png" alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Ways to know if your supplier is disposing plastic properly!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src="images/resources/resources-blog-img3.png" alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src="images/resources/resources-blog-img.png" alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src="images/resources/resources-blog-img2.png" alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Ways to know if your supplier is disposing plastic properly!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src="images/resources/resources-blog-img3.png" alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="resources-blog-sec pt-50 pb-30 homeSubscribeSec">
            <div className="container">
              <div className="container-wrapper">
                <div className="resources-blog-inner">
                  <div className="resources-blog-headeing">
                    <img src="images/icon/newspaper-icon.png" alt="" />
                    <p>Press Releases</p>
                  </div>
                  <Link href="#" className="custome-btn" target="_blank">
                    <span className="txt">Explore All</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </Link>
                </div>
                <div className="resources-blog-bottom pt-30">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src={PressImage1} alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src={PressImage2} alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Ways to know if your supplier is disposing plastic properly!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src={PressImage3} alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src={PressImage1} alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src={PressImage2} alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>Ways to know if your supplier is disposing plastic properly!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                      <div className="custome-column-boxinner">
                        <div className="resources-blog-box">
                          <div className="custome-thumb">
                            <img src={PressImage3} alt="" />
                          </div>
                          <div className="resources-blog-box-inner">
                            <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-80 pb-80 getInTouchSec"  id="getInTouch" style={{background: `url(${TouchLogo}) no-repeat center center/cover`}}>
            <div className="container">
              <div className="getInTouchSecinner">
                <div className="mw-100 getInTouchArea">
                  <div className="mb-25 text-center getInTouchHeaderArea">
                    <h3 className="block-title white-txt-color fw-400 title">Not Able to Find What You<br className="d-block d-lg-none d-md-none d-sm-none" /> Were Looking For?</h3>
                    <p className="white-txt-color mb-0">Reach out to us by filling the form below<br />so we can help you out! </p>
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
                            <img className="img-fluid lazyload" src={RightArrow} alt="logo" />
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
          </section>
          <section className="pt-50 pb-60 homeSubscribeSec">
            <div className="container">
              <div className="homeSubscribeSecinner">
                <div className="text-center homeSubscribeContent">
                  <div className="icon mb-25">
                    <img className="img-fluid lazyloaded"  alt="logo" src={NewsLetter} />
                  </div>
                  <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news,
                    insightful<br /> expert analysis,
                    and practical tips—delivered straight to your inbox. </h4>
                  <Link to="#" onClick={()=>setIsOpen(true)} className="custome-btn subscribe-btn">
                    <span className="txt">Subscribe Now!</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    };
 export default PressRelease;   
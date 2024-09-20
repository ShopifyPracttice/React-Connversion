import RightArrow2 from "../images/icon/right-arrow-2.svg";
import GuideImage from "../images/guide/guide-img.png";
import FeatureIcon from "../images/blog/feature-icon.png";
import FeatureIcon2 from "../images/blog/feature-icon-2.png";
import DoubleIcon from "../images/blog/double-icon.png";
import DoubleIcon2 from "../images/blog/double-icon2.png";
import FactImage1 from "../images/guide/fact-img1.png"
import FactImage2 from "../images/guide/fact-img2.png"
import FactImage3 from "../images/guide/fact-img3.png"
import PromoVideo from "../images/guide/promovideo-img.png";
// import TouchImage from "../images/bg/getInTouch-bg.svg";
import TouchLogo from "../images/bg/getInTouch-bg.webp";
import ClientStories from "../components/ClientStories";


const Guide = () =>{
return (
  
        <main>
          <section className="law-sec pt-40 pb-40 homeSubscribeSec guid-banner-sec">
            <div className="container">
              <div className="law-inner">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="law-left">
                      <h1>Guide to EU’s Corporate Sustainability<br /> Due Diligence Directive - Ebook</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci eget erat
                        sagittis ornare. Nam malesuada nisi eros, vel feugiat sapien mollis in.&nbsp;</p>
                      <a href="#" className="custome-btn subscribe-btn">
                        <span className="txt">Download Now</span>
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="law-right">
                      <img src={GuideImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="inside-sec pt-40 pb-40">
            <div className="container">
              <div className="inside-inner">
                <div className="row align-items-center rowBox">
                  <div className="col-lg-7 columnBox last_blk">
                    <div className="inside-left">
                      <div className="feature-icon">
                        <h3 className="block-title fw-400 mb-20">What’s Inside?</h3>
                        <ul>
                          <li>
                            <div className="feature-icon-inner">
                              <div className="feature-right">
                                <div className="feature-icon">
                                  <img src={FeatureIcon} alt="" />
                                </div>
                              </div>
                              <div className="feature-cont">
                                <h4>Dummy heading goes here</h4>
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
                                <h4>Dummy heading goes here</h4>
                                <p>Your success is our focus. We're with you every step of the way.
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
                                <h4>Dummy heading goes here</h4>
                                <p>We create customized solutions that align with your specific
                                  goals and values.
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
                                <h4>Dummy heading goes here </h4>
                                <p>We build trust through open communication and ethical practices.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 columnBox first_blk">
                    <div className="inside-right">
                      <div className="getInTouchFormArea">
                        <form>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Company name" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Industry" />
                          </div>
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <span className="input-group-text">
                                <select className="form-select">
                                  <option>+91</option>
                                  <option>+91</option>
                                </select>
                              </span>
                              <input type="number" className="form-control" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="check1" name="option1" defaultValue="something" />
                              <label className="form-check-label">I agree to the <a href="#">Privacy
                                  Policy</a></label>
                            </div>
                          </div>
                          <div className="getInTouchFormBtnArea">
                            <button type="button" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
                              <span className="txt">Download Now</span>
                              <span className="icon">
                                <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} />
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="fact-sec pt-64 pb-64 fact-sec-2">
            <div className="container">
              <div className="row align-items-center rowBox">
                <div className="col-lg-6 columnBox">
                  <div className="fact-left">
                    <h3 className="block-title fw-400">Some Enticing Facts to Know</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Scelerisque vitae non aliquet lacus a purus
                      condimentum volutpat. Viverra ac sed arcu aliquet odio dictum tincidunt fames massa.
                      Vehicula integer egestas eget iaculis congue nisl fusce. Turpis iaculis ullamcorper
                      vitae ornare egestas.</p>
                    <div className="fact-sec-btns">
                      <a href="#" className="custome-btn subscribe-btn">
                        <span className="txt">Download Now</span>
                        <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 columnBox ">
                  <div className="fact-right">
                    <div className="row rowBox guid-facts-slider slick-initialized slick-slider">
                      <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: '600px', transform: 'translate3d(0px, 0px, 0px)'}}><div className="col-lg-4 col-md-4 col-sm-4 col-4 columnBox fact-box slick-slide slick-current slick-active" style={{width: '200px'}} data-slick-index={0} aria-hidden="false" tabIndex={0}>
                            <div className="fact-boxinner">
                              <img className="img-fluid lazyloaded" alt="" src={FactImage1} />
                            </div>
                          </div><div className="col-lg-4 col-md-4 col-sm-4 col-4 columnBox fact-box slick-slide slick-active" style={{width: '200px'}} data-slick-index={1} aria-hidden="false" tabIndex={0}>
                            <div className="fact-boxinner">
                              <img className="img-fluid lazyloading" alt="" src={FactImage2} />
                            </div>
                          </div><div className="col-lg-4 col-md-4 col-sm-4 col-4 columnBox fact-box slick-slide slick-active" style={{width: '200px'}} data-slick-index={2} aria-hidden="false" tabIndex={0}>
                            <div className="fact-boxinner">
                              <img className="img-fluid lazyloading" alt="" src={FactImage3} />
                            </div>
                          </div></div></div></div>
                    <div className="btn-wrap">
                      <button className="prev-btn slick-disabled"><img  className="img-fluid lazyload" alt="" src="images/icon/left-angle.svg" /></button>
                      <button className="next-btn"><img data-src="images/icon/right-angle.svg" className="img-fluid lazyload" alt="" src="images/icon/right-angle.svg" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-64 pb-64 promovideo-sec">
            <div className="container">
              <div className="promovideo-inner">
                <h3 className="block-title fw-400">Promo Video Goes Here</h3>
                <p>VECTRA International will empower businesses, workers, and communities through innovative,
                  <br />tailor-made solutions that build resilient and efficient supply chains for a sustainable
                  future.
                </p>
                <img src={PromoVideo} alt="" />
                <div className="promovideo-btns">
                  <a href="#" className="mt-30 custome-btn promovideo-btn">
                    <span className="txt">Download Now</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="pt-80 pb-60 testimonialSec guidTestimonialSec d-none" style={{}}>
            <div className="container">
              <div className="mb-40 text-center testimonialHeader">
                <h3 className="block-title fw-400 mb-10">What Our Clients Are Saying about Us</h3>
              </div>
              <div className="testimonialSecinner">
                <div className="testimonialSlider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all', width: '2099px'}}>
                      <div className="owl-item active" style={{width: '399.777px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner">
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
                      <div className="owl-item active" style={{width: '399.777px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner">
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
                      <div className="owl-item active" style={{width: '399.777px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner">
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
                      <div className="owl-item" style={{width: '399.777px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner">
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
                      <div className="owl-item" style={{width: '399.777px', marginRight: '20px'}}>
                        <div className="testimonialSliderItem">
                          <div className="testimonialBox">
                            <div className="testimonialBoxinner">
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
                  <div className="owl-nav"><button type="button" role="presentation" className="owl-prev disabled"><span><i className="fa-light fa-arrow-left" /></span></button><button type="button" role="presentation" className="owl-next"><span><i className="fa-light fa-arrow-right" /></span></button></div><div className="owl-dots disabled" /></div>
              </div>
            </div>
          </section> */}
          <ClientStories/>
          <section className="vctr-sec mb-50" id="unique-id">
            <div className="container">
              <div className="vctr-inner">
                <div className="homeAboutCounterArea">
                  <h3 className="mav-20 fw-400 block-title">Why choose VECTRA? </h3>
                  <p className="mb-25 text">Our solutions are tailored to empower your organisation to achieve<br />ESG goals and build more resilient, responsible supply chains.</p>
                  <div className="mb-25 homeAboutCounterField homeAboutCounterField-2">
                    <div className="row rowBox2">
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 columnBox2 homeAboutCounterBox">
                        <div className="d-flex align-items-center homeAboutCounterBoxinner">
                          <h2 className="mb-0 mr-10 green-txt-color fw-300 number"><span className="counter">19</span>+</h2>
                          <p className="mb-0 fw-600 text">Years of<br />Experience</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 columnBox2 homeAboutCounterBox">
                        <div className="d-flex align-items-center homeAboutCounterBoxinner">
                          <h2 className="mb-0 mr-10 green-txt-color fw-300 number"><span className="counter">50</span>+</h2>
                          <p className="mb-0 fw-600 text">Experts<br />Worldwide </p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 columnBox2 homeAboutCounterBox">
                        <div className="d-flex align-items-center homeAboutCounterBoxinner">
                          <h2 className="mb-0 mr-10 green-txt-color fw-300 number"><span className="counter">500</span>+</h2>
                          <p className="mb-0 fw-600 text">Satisfied<br />Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#getInTouch" className="custome-btn">
                    <span className="txt">Download PDF</span>
                    <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="positive-impact-sec pt-80 pb-80 makeEbookSec"  id="getInTouch" style={{backgroundImage: `url(${TouchLogo})`}}>
            <div className="container">
              <div className="positive-impact-inner">
                <h3 className="block-title white-txt-color fw-400 title mb-24">Make the ebook yours!</h3>
                <a href="#" className="custome-btn" target="_blank">
                  <span className="txt">Download for FREE</span>
                  <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                </a>
              </div>
            </div>
          </section>
        </main>
      );
    }
export default Guide;
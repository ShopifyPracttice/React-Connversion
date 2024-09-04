import { Link } from "react-router-dom";
import MailIcon from "../images/icon/mail-icon.png";
import PhoneIcon from "../images/icon/mobile-icon.png";
import RightArrow2 from "../images/icon/right-arrow-2.svg";
const ContactUs = ()=>{
return (
  
        <section className="contact-sec pt-80 pb-80">
          <div className="container">
            <div className="contact-inner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="contact-right">
                    <h1 className="fw-300 mb-20 green-color">Get in Touch to Start<br />
                      Making a Positive Impact</h1>
                    <p>Fill out the form and we'll connect <br />
                      you with one of our consultants.</p>
                    <ul>
                      <li>
                        <Link to="mailto:contact@vectra-intl.com">
                          <img src={MailIcon} alt="" />
                          contact@vectra-intl.com
                        </Link>
                      </li>
                      <li>
                        <Link to="tel:+32495239088">
                          <img src={PhoneIcon} alt="" />
                          +32 495 239088
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="contact-from">
                    <div className="mw-100 getInTouchFormArea">
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
                                <option value={+1}>+1 (United States)</option>
                                <option value={+44}>+44 (United Kingdom)</option>
                                <option value={+91}>+91 (India)</option>
                                <option value={+61}>+61 (Australia)</option>
                                <option value={+81}>+81 (Japan)</option>
                                <option value={+49}>+49 (Germany)</option>
                                <option value={+33}>+33 (France)</option>
                                <option value={+86}>+86 (China)</option>
                                <option value={+55}>+55 (Brazil)</option>
                                <option value={+7}>+7 (Russia)</option>
                                <option value={+39}>+39 (Italy)</option>
                                <option value={+34}>+34 (Spain)</option>
                                <option value={+82}>+82 (South Korea)</option>
                                <option value={+1}>+1 (Canada)</option>
                                <option value={+34}>+34 (Spain)</option>
                                <option value={+62}>+62 (Indonesia)</option>
                                <option value={+52}>+52 (Mexico)</option>
                                <option value={+27}>+27 (South Africa)</option>
                                <option value={+60}>+60 (Malaysia)</option>
                                <option value={+63}>+63 (Philippines)</option>
                                <option value={+65}>+65 (Singapore)</option>
                                <option value={+46}>+46 (Sweden)</option>
                                <option value={+41}>+41 (Switzerland)</option>
                                <option value={+31}>+31 (Netherlands)</option>
                                <option value={+47}>+47 (Norway)</option>
                                <option value={+32}>+32 (Belgium)</option>
                                <option value={+48}>+48 (Poland)</option>
                                <option value={+43}>+43 (Austria)</option>
                                <option value={+90}>+90 (Turkey)</option>
                                <option value={+20}>+20 (Egypt)</option>
                                <option value={+98}>+98 (Iran)</option>
                                <option value={+64}>+64 (New Zealand)</option>
                                <option value={+45}>+45 (Denmark)</option>
                                <option value={+66}>+66 (Thailand)</option>
                                <option value={+380}>+380 (Ukraine)</option>
                                <option value={+91}>+91 (India)</option>
                                <option value={+351}>+351 (Portugal)</option>
                                <option value={+30}>+30 (Greece)</option>
                                <option value={+54}>+54 (Argentina)</option>
                                <option value={+372}>+372 (Estonia)</option>
                                <option value={+420}>+420 (Czech Republic)</option>
                                <option value={+372}>+372 (Estonia)</option>
                                <option value={+370}>+370 (Lithuania)</option>
                                <option value={+420}>+420 (Czech Republic)</option>
                                <option value={+351}>+351 (Portugal)</option>
                                <option value={+502}>+502 (Guatemala)</option>
                                <option value={+90}>+90 (Turkey)</option>
                                <option value={+371}>+371 (Latvia)</option>
                                <option value={+353}>+353 (Ireland)</option>
                                <option value={+372}>+372 (Estonia)</option>
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
                              <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} />
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
      );
    }
export default ContactUs;
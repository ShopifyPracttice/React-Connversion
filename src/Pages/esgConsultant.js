import { Link } from "react-router-dom";
import HomeIcon from "../images/icon/home-icon.png";
import RightArrow2 from "../images/icon/right-arrow-2.svg";
const EsgConsultant = () =>{
return (
  
        <main>
          <section className="blog-header">
            <div className="container">
              <div className="blog-header-inner">
                <ul>
                  <li><Link to=""><img src={HomeIcon} alt="" /></Link></li>
                  <li><a href="/careers">Careers</a></li>
                  <li className="line-cap">ESG Consultant - Worldwide</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="tech-executive-banner">
            <div className="container">
              <div className="tech-executive-inner">
                <h2>ESG Consultant</h2>
                <ul>
                  <li><img src="images/icon/blue-location.svg" alt="" />Worldwide - Remote</li>
                  <li><img src="images/icon/blue-time.svg" alt="" />Freelance</li>
                </ul>
                <a href="#pageForm" className="custome-btn">
                  <span className="txt">Apply Now</span>
                  <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} /></span>
                </a>
              </div>
              <div className="phone">
                <ul>
                  <li>
                    <span>Department</span>
                    <p>Information Technology</p>
                  </li>
                  <li>
                    <span>Expected Joining Timeline</span>
                    <p>15-30 Days</p>
                  </li>
                  <li>
                    <span>Job Type</span>
                    <p>Full Time - Contract</p>
                  </li>
                  <li>
                    <span>Last Updated on</span>
                    <p>05-07-2024 | 14:40 IST</p>
                  </li>
                </ul>
                <button type="button" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
                  <span className="txt">Get Started</span>
                  <span className="icon">
                    <img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} />
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section className="introduction pt-60 pb-40">
            <div className="container">
              <div className="introduction-inner">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tntroduction-left">
                      <h3>Thank you for your interest in VECTRA International!</h3>
                      <p>Work remotely, leverage your expertise, and unlock new opportunities.
                      </p>
                      <p>VECTRA International welcomes top freelance consultants to its network and support clients worldwide. Our remote-first model means you work from your own place, while our extensive network opens doors to diverse and challenging projects.
                      </p>
                      <h3>Who This Is For?</h3>
                      <p>This opportunity is specifically tailored for freelance consultants. We look forward to receiving information about yourself. We will then reach out to you to discuss next steps towards collaboration opportunities.
                      </p>
                      <h3>Confidentiality</h3>
                      <p>All information shared with us will be treated as confidential.</p>
                      <div className="tech-television-box pt-30" id="pageForm">
                        <div className="getInTouchFormArea esgConsultantFormArea">
                          <h4 className="text-center title"> Fill out the form below to apply for this position</h4>
                          {/*<from id="contactForm" enctype="multipart/form-data">
                                              <div class="row rowBox">
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="form-group">
                                                          <input type="text" name="full_name" class="form-control" placeholder="Full Name" required>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="form-group">
                                                          <input type="text" name="location" class="form-control" placeholder="Location (City, Country)" required>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="form-group">
                                                          <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="form-group">
                                                          <div class="input-group">
                                                              <span class="input-group-text">
                                                                  <select class="form-select" name="country_code" required>
                                                                      <option>+91</option>
                                                                      <option>+1</option>
                                                                  </select>
                                                              </span>
                                                              <input type="number" name="phone_number" class="form-control"
                                                                  placeholder="Phone Number" required>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="form-group">
                                                          <input type="text" name="linkedin_profile" class="form-control"
                                                              placeholder="Linkedin profile (Optional)" required>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="form-group">
                                                          <input type="text" name="freelance_consultant" class="form-control"
                                                              placeholder="Freelance Consultant Since" required>
                                                      </div>
                                                  </div>
                                                  
                                                  <div class="col-lg-12 columnBox">
                                                      <div class="form-group">
                                                          <input type="text" name="industries" class="form-control" required
                                                              placeholder="Industries/Sectors You Have Experience Working With">
                                                      </div>
                                                  </div>
                                               
                                                  <div class="col-lg-12 columnBox">
                                                      <div class="form-group">
                                                          <textarea name="expertise" id="" required class="form-control" placeholder="Your Specific Expertise in Esg Business Topics: (e.g., Reporting, Quality Assurance, Productivity, Financial Topics, It, Environmental, Social And/or Governance-Related Topics) (Maximum 800 Words)"></textarea>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-12 columnBox">
                                                      <div class="form-group">
                                                          <input type="text" class="form-control" name="skills" required
                                                              placeholder="Your Top 5 Skills">
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-12 columnBox">
                                                      <div class="form-group fileupload">
                                                          <input type="file" name="upload_file" class="form-control">
                                                          <div class="uploadfile-inner">
                                                              <i class="fa-light fa-arrow-up-from-bracket"></i>
                                                              <span>Upload your CV</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="form-group policy-checkbox">
                                                          <div class="form-check">
                                                              <input class="form-check-input" type="checkbox" id="check1"
                                                                  name="option1" value="something" required>
                                                              <label class="form-check-label">I agree to the <a href="#">Privacy
                                                                  Policy</a></label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-lg-6 columnBox">
                                                      <div class="getInTouchFormBtnArea">
                                                          <button type="submit" name="submit" class="justify-content-center w-100 custome-btn getInTouchFormBtn">
                                                          <span class="txt">Apply Now</span>
                                                          <span class="icon">
                                                          <img class="img-fluid ls-is-cached lazyloaded" data-src="images/icon/right-arrow-2.svg" alt="logo" src="images/icon/right-arrow-2.svg">
                                                          </span>
                                                          </button>				
                                                          </div>
                                                  </div>
                                              </div>
                                          </from>*/}
                          <form id="contactForm" encType="multipart/form-data">
                            <div className="row rowBox">
                              {/* Full Name */}
                              <div className="col-lg-6 columnBox">
                                <div className="form-group">
                                  <input type="text" name="full_name" className="form-control" placeholder="Full Name" required />
                                </div>
                              </div>
                              {/* Location */}
                              <div className="col-lg-6 columnBox">
                                <div className="form-group">
                                  <input type="text" name="location" className="form-control" placeholder="Location (City, Country)" required />
                                </div>
                              </div>
                              {/* Email */}
                              <div className="col-lg-6 columnBox">
                                <div className="form-group">
                                  <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                                </div>
                              </div>
                              {/* Phone Number */}
                              <div className="col-lg-6 columnBox">
                                <div className="form-group">
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <select className="form-select" name="country_code" required>
                                        <option value={+1}>+1</option>
                                        <option value={+44}>+44 </option>
                                        <option value={+91}>+91 </option>
                                        <option value={+61}>+61 </option>
                                        <option value={+81}>+81 </option>
                                        <option value={+49}>+49 </option>
                                        <option value={+33}>+33 </option>
                                        <option value={+86}>+86 </option>
                                        <option value={+55}>+55 </option>
                                        <option value={+7}>+7 </option>
                                        <option value={+39}>+39 </option>
                                        <option value={+34}>+34 </option>
                                        <option value={+82}>+82 </option>
                                        <option value={+1}>+1 </option>
                                        <option value={+62}>+62 </option>
                                        <option value={+52}>+52 </option>
                                        <option value={+27}>+27 </option>
                                        <option value={+60}>+60 </option>
                                        <option value={+63}>+63 </option>
                                        <option value={+65}>+65 </option>
                                        <option value={+46}>+46 </option>
                                        <option value={+41}>+41 </option>
                                        <option value={+31}>+31 </option>
                                        <option value={+47}>+47 </option>
                                        <option value={+32}>+32 </option>
                                        <option value={+48}>+48 </option>
                                        <option value={+43}>+43 </option>
                                        <option value={+90}>+90 </option>
                                        <option value={+20}>+20 </option>
                                        <option value={+98}>+98 </option>
                                        <option value={+64}>+64 </option>
                                        <option value={+45}>+45 </option>
                                        <option value={+66}>+66 </option>
                                        <option value={+380}>+380 </option>
                                        <option value={+351}>+351 </option>
                                        <option value={+30}>+30 </option>
                                        <option value={+54}>+54 </option>
                                        <option value={+372}>+372 </option>
                                        <option value={+420}>+420 </option>
                                        <option value={+370}>+370 </option>
                                        <option value={+502}>+502 </option>
                                        <option value={+371}>+371 </option>
                                        <option value={+353}>+353 </option>
                                      </select>
                                    </span>
                                    <input type="number" name="phone_number" className="form-control" placeholder="Phone Number" required />
                                  </div>
                                </div>
                              </div>
                              {/* LinkedIn Profile */}
                              <div className="col-lg-6 columnBox">
                                <div className="form-group">
                                  <input type="text" name="linkedin_profile" className="form-control" placeholder="LinkedIn profile (Optional)" />
                                </div>
                              </div>
                              {/* Freelance Consultant Since */}
                              <div className="col-lg-6 columnBox">
                                <div className="form-group">
                                  <input type="text" name="freelance_consultant" className="form-control" placeholder="Freelance Consultant Since" required />
                                </div>
                              </div>
                              {/* Industries */}
                              <div className="col-lg-12 columnBox">
                                <div className="form-group">
                                  <input type="text" name="industries" className="form-control" required placeholder="Industries/Sectors You Have Experience Working With" />
                                </div>
                              </div>
                              {/* Expertise */}
                              <div className="col-lg-12 columnBox">
                                <div className="form-group">
                                  <textarea name="expertise" required className="form-control" placeholder="Your Specific Expertise in ESG Business Topics: (e.g., Reporting, Quality Assurance, Productivity, Financial Topics, IT, Environmental, Social And/or Governance-Related Topics) (Maximum 800 Words)" defaultValue={""} />
                                </div>
                              </div>
                              {/* Skills */}
                              <div className="col-lg-12 columnBox">
                                <div className="form-group">
                                  <input type="text" className="form-control" name="skills" required placeholder="Your Top 5 Skills" />
                                </div>
                              </div>
                              {/* Upload CV */}
                              <div className="col-lg-12 columnBox">
                                <div className="form-group">
                                  <div className="fileupload">
                                    <input type="file" name="upload_file" className="form-control" id="cv-upload" />
                                    <div className="uploadfile-inner">
                                      <i className="fa-light fa-arrow-up-from-bracket" />
                                      <span>Upload your CV</span>
                                    </div>
                                  </div>
                                  <p className="fileName mt-2 mb-0" id="file-name" style={{display: 'none', color: '#227b2c'}} /> 
                                </div>
                              </div>
                              {/* Privacy Policy */}
                              <div className="col-lg-6 columnBox">
                                <div className="form-group policy-checkbox">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" defaultValue="something" required />
                                    <label className="form-check-label">I agree to the <a href="https://apexxcapital.co/privacy-policy">Privacy Policy</a></label>
                                  </div>
                                </div>
                              </div>
                              {/* Submit Button */}
                              <div className="col-lg-6 columnBox">
                                <div className="getInTouchFormBtnArea">
                                  <button type="submit" name="submit" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
                                    <span className="txt">Apply Now</span>
                                    <span className="icon">
                                      <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} />
                                    </span>
                                  </button>                
                                </div>
                              </div>
                            </div>
                          </form>
                          <div id="thankYouMessage" style={{display: 'none'}}>
                            Thank you for filling out the details!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="introduction-right ">
                      <div className="ddepartment-sec">
                        <ul>
                          <li>
                            <span>Department</span>
                            <p>ESG Consulting</p>
                          </li>
                          <li>
                            <span>Expected Joining Timeline</span>
                            <p>15-30 Days</p>
                          </li>
                          <li>
                            <span>Job Type</span>
                            <p>Freelance Contract</p>
                          </li>
                          <li>
                            <span>Last Updated on</span>
                            <p>05-07-2024 | 14:40 IST</p>
                          </li>
                        </ul>
                        <a href="#pageForm" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
                          <span className="txt">Apply Now</span>
                          <span className="icon">
                            <img className="img-fluid ls-is-cached lazyloaded" alt="logo" src={RightArrow2} />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    };
export default EsgConsultant;    
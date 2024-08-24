import { Link } from "react-router-dom";
import HomeIcon from "../images/icon/home-icon.png";
import BlueLocation from "../images/icon/blue-location.svg";
import BlueTime from "../images/icon/blue-time.svg";
import RightArrow2 from "../images/icon/right-arrow-2.svg";
const TechElecutive = () =>{
return (
  
        <main>
          <section className="blog-header">
            <div className="container">
              <div className="blog-header-inner">
                <ul>
                  <li><Link to="#"><img src={HomeIcon} alt="" /></Link></li>
                  <li>Careers</li>
                  <li className="line-cap">Tech Support Executive - India</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="tech-executive-banner">
            <div className="container">
              <div className="tech-executive-inner">
                <h2>Tech Support Executive</h2>
                <ul>
                  <li><img src={BlueLocation} className="img-fluid lazyload" alt="" /><span className="txt">India - Remote</span></li>
                  <li><img src={BlueTime} className="img-fluid lazyload" alt="" /><span className="txt">Full Time</span></li>
                </ul>
                <Link to="#getInTouch" className="custome-btn">
                  <span className="txt">Apply Now</span>
                  <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
                </Link>
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
                  <span className="txt">Apply Now</span>
                  <span className="icon">
                    <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} />
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
                      <h3>About VECTRA International</h3>
                      <p>VECTRA International is committed to improving the lives of workers in global supply
                        chains and empowering the communities they live in. Founded in 2005, we believe in
                        using business as a force for good, driving positive change through ethical and
                        efficient supply chain practices.</p>
                      <h3>Role Description</h3>
                      <p><strong>Brand Representation:</strong> You will serve as the frontline
                        representatives of the company. You will embody the brand’s values, tone, and
                        messaging in your interactions with customers, thereby indirectly influencing the
                        perception of the brand.
                      </p>
                      <p><strong>Customer Feedback Loop:</strong> You act as a bridge between customers and
                        the company, providing valuable feedback on customer sentiments, needs, and pain
                        points.
                      </p>
                      <p><strong>Relationship Building:</strong> You will work to build strong relationships
                        with customers through consistent and personalized interactions.
                      </p>
                      <p><strong>Issue Resolution:</strong> You will address customer concerns and issues
                        promptly.
                      </p>
                      <p><strong>Upselling and Cross-selling:</strong> Through attentive listening and
                        understanding of customer needs, you will identify opportunities for upselling or
                        cross- selling additional products or services.
                      </p>
                      <p><strong>Communication Channel:</strong> You will serve as a vital communication
                        channel between the company and its customers. Whether through phone calls, emails,
                        chat support, or social media platforms, you will disseminate important information
                        about products, services, promotions, and company updates.</p>
                      <p><strong>Working With Sales Manager</strong></p>
                      <ul className="statement">
                        <li>Tidying up the existing database (deleting leads or upgrading to contacts)
                        </li>
                        <li>Completing missing data for contacts
                        </li>
                        <li>Preparing leads for campaigns
                        </li>
                        <li>Buying persona is prepared by the sales manager based on which the you will do
                          research of suitable leads and enters complete data records in CRM.
                        </li>
                      </ul>
                      <h3>Qualifications</h3>
                      <ul className="statement">
                        <li>Bachelor's degree in Business Administration, Computer Science, or related field
                          preferred.
                        </li>
                        <li>Proven experience in customer support or a similar role.
                        </li>
                        <li>Excellent written and verbal communication skills.
                        </li>
                        <li>Strong problem-solving and troubleshooting abilities.
                        </li>
                        <li>Ability to work independently with minimal supervision as well as in a team
                          environment.</li>
                        <li>Familiarity with CRM systems and helpdesk software preferred.</li>
                        <li>Technical aptitude and understanding of software applications is a plus.</li>
                        <li>Ability to multitask and prioritize workload effectively.</li>
                        <li>Positive attitude, empathy, and a passion for delivering exceptional customer
                          service.</li>
                      </ul>
                      <div className="tech-television-box pt-30">
                        <div className="getInTouchFormArea">
                          <h4 className="text-center title">Fill out the form below to apply for this position</h4>
                          <form id="jobApplicationForm" encType="multipart/form-data">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="text" name="full_name" required className="form-control" placeholder="Name" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="text" name="country" required className="form-control" placeholder="Country" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="email" name="email" required className="form-control" placeholder="Email" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <select className="form-select" name="country_code" required>
                                        <option>+91</option>
                                        <option>+1</option>
                                      </select>
                                    </span>
                                    <input type="number" name="phone_number" required className="form-control" placeholder="Phone Number" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="text" name="highest_qualification" required className="form-control" placeholder="Highest Qualification" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input type="text" name="work_experience" required className="form-control" placeholder="Total Work Experience" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group fileupload">
                                  <input type="file" name="upload_cv" className="form-control" required />
                                  <div className="uploadfile-inner">
                                    <i className="fa-light fa-arrow-up-from-bracket" />
                                    <span>Upload your CV</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group fileupload">
                                  <input type="file" name="upload_cover_letter" className="form-control" required />
                                  <div className="uploadfile-inner">
                                    <i className="fa-light fa-arrow-up-from-bracket" />
                                    <span>Upload your Cover Letter</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group policy-checkbox">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" defaultValue="something" required />
                                    <label className="form-check-label">I agree to the Privacy
                                      Policy</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
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
                    <div className="introduction-right">
                      <div className="ddepartment-sec">
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
                          <span className="txt">Apply Now</span>
                          <span className="icon">
                            <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} />
                          </span>
                        </button>
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
export default TechElecutive;    
import { Link } from "react-router-dom";
import SearchDetailImage from "../images/search/search-details-img.png";
import LeftArrow from "../images/search/search-left-arrow.png";
import RightArrow from "../images/search/search-right-arrow.png";
const SearchDetails = () =>{
return (
  
        <main>
          <section className="search-details">
            <div className="search-details-inner">
              <div className="search-details-header">
                <div className="container">
                  <div className="search-details-header-inner">
                    <div className="search-input">
                      <span className="icon"><i className="fa-light fa-magnifying-glass" /></span>
                      <input type="text" className="form-control" placeholder="Search" />
                      <button className="close-btn"><i className="fa-regular fa-xmark" /></button>
                    </div>
                    <div className="search-details-tab">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#search-tab-one" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#search-tab-two" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Blogs</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#search-tab-three" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Client Success
                            Stories</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#search-tab-four" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">eBook</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#search-tab-five" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Press
                            Releases</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-bottom">
                <div className="container">
                  <div className="search-bottom-inner">
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="search-tab-one" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                        <div className="search-tab-details">
                          <h4>Found 15 results for ESG</h4>
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="search-tab-details-left">
                                  <h4>The Role of ESG in Modern Business Management: Building a
                                    Sustainable Future</h4>
                                  <p>We have realized that in the current world where competition
                                    is high, organizations cannot be measured by their revenue
                                    only. Buyers, shareholders, and workforce likewise expect
                                    organizations to be more reliable on ESG values, in addition
                                    to maximizing profitability.</p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </Link>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Business Case for Accurate ESG Reporting</h4>
                                  <p>Corporate accountability has never been more critical.
                                    Stakeholders, including investors, customers, and
                                    regulators, demand transparency in how companies operate and
                                    their impact on the world. This demand has brought ESG
                                    (Environmental, Social, and Governance) reporting into the
                                    spotlight. Accurate ESG reporting is not just about
                                    compliancep&gt;
                                  </p></div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>How a Current Situation Analysis Can Revolutionize Your ESG
                                    Strategy</h4>
                                  <p>Setting ESG goals is like charting a course for a brighter
                                    future, but without a map of your current terrain, you're
                                    navigating blind. A comprehensive current situation analysis
                                    (CSA) is that map – your compass for informed, impactful,
                                    and achievable ESG strategies. </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>Why Independent Quality Assurance is Essential for Accurate
                                    ESG Reports</h4>
                                  <p>Environmental, Social, and Governance (ESG) reporting has
                                    become a cornerstone for companies aiming to demonstrate
                                    their commitment to sustainable and ethical practices. As
                                    stakeholders increasingly rely on these reports for
                                    decision-making, </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div className="search-pagination-sec">
                            <p className="mb-0">1 - 5 of 15 results</p>
                            <div className="arrow-sec">
                              <div className="arrow-row">
                                <div className="arrow-box">
                                  <a href="#"><img src={LeftArrow} alt="" /></a>
                                </div>
                                <div className="arrow-row">
                                  <div className="arrow-box">
                                    <a href="#"><img src={RightArrow} alt="" /></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="search-tab-two" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                        <div className="search-tab-details">
                          <h4>Found 15 results for ESG</h4>
                          <ul>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Role of ESG in Modern Business Management: Building a
                                    Sustainable Future</h4>
                                  <p>We have realized that in the current world where competition
                                    is high, organizations cannot be measured by their revenue
                                    only. Buyers, shareholders, and workforce likewise expect
                                    organizations to be more reliable on ESG values, in addition
                                    to maximizing profitability.</p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Business Case for Accurate ESG Reporting</h4>
                                  <p>Corporate accountability has never been more critical.
                                    Stakeholders, including investors, customers, and
                                    regulators, demand transparency in how companies operate and
                                    their impact on the world. This demand has brought ESG
                                    (Environmental, Social, and Governance) reporting into the
                                    spotlight. Accurate ESG reporting is not just about
                                    compliancep&gt;
                                  </p></div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>How a Current Situation Analysis Can Revolutionize Your ESG
                                    Strategy</h4>
                                  <p>Setting ESG goals is like charting a course for a brighter
                                    future, but without a map of your current terrain, you're
                                    navigating blind. A comprehensive current situation analysis
                                    (CSA) is that map – your compass for informed, impactful,
                                    and achievable ESG strategies. </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>Why Independent Quality Assurance is Essential for Accurate
                                    ESG Reports</h4>
                                  <p>Environmental, Social, and Governance (ESG) reporting has
                                    become a cornerstone for companies aiming to demonstrate
                                    their commitment to sustainable and ethical practices. As
                                    stakeholders increasingly rely on these reports for
                                    decision-making, </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div className="search-pagination-sec">
                            <p className="mb-0">1 - 5 of 15 results</p>
                            <div className="arrow-sec">
                              <div className="arrow-row">
                                <div className="arrow-box">
                                  <Link to="#"><img src={LeftArrow} alt="" /></Link>
                                </div>
                                <div className="arrow-row">
                                  <div className="arrow-box">
                                    <Link to="#"><img src={RightArrow} alt="" /></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="search-tab-three" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                        <div className="search-tab-details">
                          <h4>Found 15 results for ESG</h4>
                          <ul>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Role of ESG in Modern Business Management: Building a
                                    Sustainable Future</h4>
                                  <p>We have realized that in the current world where competition
                                    is high, organizations cannot be measured by their revenue
                                    only. Buyers, shareholders, and workforce likewise expect
                                    organizations to be more reliable on ESG values, in addition
                                    to maximizing profitability.</p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Business Case for Accurate ESG Reporting</h4>
                                  <p>Corporate accountability has never been more critical.
                                    Stakeholders, including investors, customers, and
                                    regulators, demand transparency in how companies operate and
                                    their impact on the world. This demand has brought ESG
                                    (Environmental, Social, and Governance) reporting into the
                                    spotlight. Accurate ESG reporting is not just about
                                    compliancep&gt;
                                  </p></div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>How a Current Situation Analysis Can Revolutionize Your ESG
                                    Strategy</h4>
                                  <p>Setting ESG goals is like charting a course for a brighter
                                    future, but without a map of your current terrain, you're
                                    navigating blind. A comprehensive current situation analysis
                                    (CSA) is that map – your compass for informed, impactful,
                                    and achievable ESG strategies. </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>Why Independent Quality Assurance is Essential for Accurate
                                    ESG Reports</h4>
                                  <p>Environmental, Social, and Governance (ESG) reporting has
                                    become a cornerstone for companies aiming to demonstrate
                                    their commitment to sustainable and ethical practices. As
                                    stakeholders increasingly rely on these reports for
                                    decision-making, </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div className="search-pagination-sec">
                            <p className="mb-0">1 - 5 of 15 results</p>
                            <div className="arrow-sec">
                              <div className="arrow-row">
                                <div className="arrow-box">
                                  <Link to="#"><img src={LeftArrow} alt="" /></Link>
                                </div>
                                <div className="arrow-row">
                                  <div className="arrow-box">
                                    <Link to="#"><img src={RightArrow} alt="" /></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="search-tab-four" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                        <div className="search-tab-details">
                          <h4>Found 15 results for ESG</h4>
                          <ul>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Role of ESG in Modern Business Management: Building a
                                    Sustainable Future</h4>
                                  <p>We have realized that in the current world where competition
                                    is high, organizations cannot be measured by their revenue
                                    only. Buyers, shareholders, and workforce likewise expect
                                    organizations to be more reliable on ESG values, in addition
                                    to maximizing profitability.</p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Business Case for Accurate ESG Reporting</h4>
                                  <p>Corporate accountability has never been more critical.
                                    Stakeholders, including investors, customers, and
                                    regulators, demand transparency in how companies operate and
                                    their impact on the world. This demand has brought ESG
                                    (Environmental, Social, and Governance) reporting into the
                                    spotlight. Accurate ESG reporting is not just about
                                    compliancep&gt;
                                  </p></div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>How a Current Situation Analysis Can Revolutionize Your ESG
                                    Strategy</h4>
                                  <p>Setting ESG goals is like charting a course for a brighter
                                    future, but without a map of your current terrain, you're
                                    navigating blind. A comprehensive current situation analysis
                                    (CSA) is that map – your compass for informed, impactful,
                                    and achievable ESG strategies. </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>Why Independent Quality Assurance is Essential for Accurate
                                    ESG Reports</h4>
                                  <p>Environmental, Social, and Governance (ESG) reporting has
                                    become a cornerstone for companies aiming to demonstrate
                                    their commitment to sustainable and ethical practices. As
                                    stakeholders increasingly rely on these reports for
                                    decision-making, </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div className="search-pagination-sec">
                            <p className="mb-0">1 - 5 of 15 results</p>
                            <div className="arrow-sec">
                              <div className="arrow-row">
                                <div className="arrow-box">
                                  <Link to="#"><img src={LeftArrow} alt="" /></Link>
                                </div>
                                <div className="arrow-row">
                                  <div className="arrow-box">
                                    <Link to="#"><img src={RightArrow} alt="" /></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="search-tab-five" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                        <div className="search-tab-details">
                          <h4>Found 15 results for ESG</h4>
                          <ul>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Role of ESG in Modern Business Management: Building a
                                    Sustainable Future</h4>
                                  <p>We have realized that in the current world where competition
                                    is high, organizations cannot be measured by their revenue
                                    only. Buyers, shareholders, and workforce likewise expect
                                    organizations to be more reliable on ESG values, in addition
                                    to maximizing profitability.</p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>The Business Case for Accurate ESG Reporting</h4>
                                  <p>Corporate accountability has never been more critical.
                                    Stakeholders, including investors, customers, and
                                    regulators, demand transparency in how companies operate and
                                    their impact on the world. This demand has brought ESG
                                    (Environmental, Social, and Governance) reporting into the
                                    spotlight. Accurate ESG reporting is not just about
                                    compliancep&gt;
                                  </p></div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>How a Current Situation Analysis Can Revolutionize Your ESG
                                    Strategy</h4>
                                  <p>Setting ESG goals is like charting a course for a brighter
                                    future, but without a map of your current terrain, you're
                                    navigating blind. A comprehensive current situation analysis
                                    (CSA) is that map – your compass for informed, impactful,
                                    and achievable ESG strategies. </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="search-tab-details-left">
                                  <h4>Why Independent Quality Assurance is Essential for Accurate
                                    ESG Reports</h4>
                                  <p>Environmental, Social, and Governance (ESG) reporting has
                                    become a cornerstone for companies aiming to demonstrate
                                    their commitment to sustainable and ethical practices. As
                                    stakeholders increasingly rely on these reports for
                                    decision-making, </p>
                                </div>
                                <div className="search-tab-details-right">
                                  <img src={SearchDetailImage} alt="" />
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div className="search-pagination-sec">
                            <p className="mb-0">1 - 5 of 15 results</p>
                            <div className="arrow-sec">
                              <div className="arrow-row">
                                <div className="arrow-box">
                                  <Link to="#"><img src={LeftArrow} alt="" /></Link>
                                </div>
                                <div className="arrow-row">
                                  <div className="arrow-box">
                                    <Link to="#"><img src={RightArrow} alt="" /></Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
export default SearchDetails;    
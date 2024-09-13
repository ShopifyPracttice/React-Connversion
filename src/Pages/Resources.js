import { Link } from "react-router-dom";
import SearchIcon from "../images/icon/search.svg";
import SortIcon from "../images/icon/sort-icon.png";
import ResourceImage2 from "../images/resources/resource-img-two-2.png";
import BlogIcon from "../images/icon/resources-blog-icon.png";
import RightArrow2 from "../images/icon/right-arrow.svg";
import RightArrow from "../images/icon/right-arrow-2.svg";
import NewsLetter from "../images/icon/newsletter-icon.svg";
import TouchLogo from "../images/bg/getInTouch-bg.webp";
import BlogImg from "../images/resources/resources-blog-img.png";
import BlogImg2 from "../images/resources/resources-blog-img2.png";
import BlogImg3 from "../images/resources/resources-blog-img3.png";
import OpenBook from "../images/icon/open-book-icon.png";
import NewsPaperIcon from "../images/icon/newspaper-icon.png"

const Resources = ({setIsOpen}) =>{
return (
        // <main>
        //   <section className="resoueces-sec resoueces-listing-banner-sec pt-40 pb-100">
        //     <div className="container">
        //       <div className="resources-inner">
        //         <div className="row align-items-center">
        //           <div className="col-lg-6">
        //             <div className="resources-left">
        //               <h1 className="mav-20 fw-300 block-title">Resources</h1>
        //               <p className="mb-25 text">Stay informed about what’s happening in the world of ESG through
        //                 our latest blogs, press releases, Client Success Stories, and eBooks</p>
        //               <div className="resources-input-sec">
        //                 <div className="resources-input-box">
        //                   <input type="text" placeholder="Search Something" />
        //                   <button type="submit">
        //                     <img src={SearchIcon} alt="" />
        //                   </button>
        //                 </div>
        //                 <Link to="#" className="ml-10 sort">
        //                   <img src={SortIcon} alt="" />
        //                   Sort by
        //                 </Link>
        //                 <div className="ml-10 footer_bottomRightArea">
        //                   <div className="resource-select-menu">
        //                     <select className="select">
        //                       <option selected>Recent</option>
        //                       <option value="West Bengal">Popularity</option>
        //                       <option value="Bihar">PF</option>
        //                       <option value="Chitagong">DE</option>
        //                       <option value="Khatmandu">TR</option>
        //                     </select>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className="col-lg-6">
        //             <div className="resources-right">
        //               {/* <img data-src="images/resources/resources-img.svg" class="img-fluid lazyload" alt=""> */}
        //               <img src={ResourceImage2} alt="" />
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        //   <section className="resources-blog-sec resoueces-listing-sec pt-0 pb-30">
        //     <div className="container">
        //       <div className="container-wrapper">
        //         <div className="resources-blog-inner">
        //           <div className="resources-blog-headeing">
        //             <img src={BlogIcon} alt="" />
        //             <p>Blogs</p>
        //           </div>
        //           <Link to="/resource/blogs" className="custome-btn">
        //             <span className="txt">Explore All</span>
        //             <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
        //           </Link>
        //         </div>
        //         <div className="resources-blog-bottom pt-30">
        //           <div className="row rowBox" id="resources-container">
        //             <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-12-27 06:12:11-RESOURCE-x}/image01.jpg" alt=""/>
        //                                   </div>
        //                                   {/* <div class="resources-blog-box-inner">
        //                                       <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                                       </p>
        //                                   </div> */}
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2023-37-28 08:37:53-RESOURCE-x}/image01.jpg" alt=""/>
        //                                   </div>
        //                                   {/* <div class="resources-blog-box-inner">
        //                                       <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                                   </div> */}
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-12-01 06:12:42-RESOURCE-x}/image01.jpg" alt=""/>
        //                                   </div>
        //                                   {/* <div class="resources-blog-box-inner">
        //                                       <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                                       </p>
        //                                   </div> */}
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-40-04 02:40:18-RESOURCE-x}/image01.jpg" alt=""/>
        //                                   </div>
        //                                   {/* <div class="resources-blog-box-inner">
        //                                       <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                                       </p>
        //                                   </div> */}
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-02-16 08:02:36-RESOURCE-x}/image01.jpg" alt=""/>
        //                                   </div>
        //                                   {/* <div class="resources-blog-box-inner">
        //                                       <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                                   </div> */}
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-37-01 09:37:56-RESOURCE-x}/image01.jpg" alt=""/>
        //                                   </div>
        //                                   {/* <div class="resources-blog-box-inner">
        //                                       <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                                       </p>
        //                                   </div> */}
        //                               </div>
        //                           </div>
        //                       </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        //   <section className="resources-blog-sec pt-50 pb-30 homeSubscribeSec" >
        //     <div className="container">
        //       <div className="container-wrapper">
        //         <div className="resources-blog-inner">
        //           <div className="resources-blog-headeing">
        //             <img src="images/icon/book-icon.png" alt="" />
        //             <p>Client Success Stories</p>
        //           </div>
        //           <Link to="/resource/blogs" className="custome-btn">
        //             <span className="txt">Explore All</span>
        //             <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" src={RightArrow2} alt="logo"  /></span>
        //           </Link>
        //         </div>
        //         <div className="resources-blog-bottom pt-30">
        //           <div class="row">
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src={BlogImg} alt=""/>
        //                                   </div>
        //                                   <div class="resources-blog-box-inner">
        //                                       <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                                       </p>
        //                                   </div>
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src={BlogImg2} alt=""/>
        //                                   </div>
        //                                   <div class="resources-blog-box-inner">
        //                                       <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                                   </div>
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src={BlogImg3} alt=""/>
        //                                   </div>
        //                                   <div class="resources-blog-box-inner">
        //                                       <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                                       </p>
        //                                   </div>
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src={BlogImg} alt=""/>
        //                                   </div>
        //                                   <div class="resources-blog-box-inner">
        //                                       <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                                       </p>
        //                                   </div>
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src={BlogImg2} alt=""/>
        //                                   </div>
        //                                   <div class="resources-blog-box-inner">
        //                                       <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                                   </div>
        //                               </div>
        //                           </div>
        //                       </div>
        //                       <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //                           <div class="custome-column-boxinner">
        //                               <div class="resources-blog-box">
        //                                   <div class="custome-thumb">
        //                                       <img src={BlogImg3} alt=""/>
        //                                   </div>
        //                                   <div class="resources-blog-box-inner">
        //                                       <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                                       </p>
        //                                   </div>
        //                               </div>
        //                           </div>
        //                       </div>
        //                   </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        //   <section className="resources-blog-sec pt-30 pb-30">
        //     <div className="container">
        //       <div className="container-wrapper">
        //         <div className="resources-blog-inner">
        //           <div className="resources-blog-headeing">
        //             <img src="images/icon/open-book-icon.png" alt="" />
        //             <p>eBooks</p>
        //           </div>
        //           <Link to="/resource/blogs" className="custome-btn">
        //             <span className="txt">Explore All</span>
        //             <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
        //           </Link>
        //         </div>
        //         <div className="resources-blog-bottom pt-30">
        //           <div className="row">
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg2} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg3} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg2} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg3} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        //   <section className="resources-blog-sec pt-50 pb-30 homeSubscribeSec" >
        //     <div className="container">
        //       <div className="container-wrapper">
        //         <div className="resources-blog-inner">
        //           <div className="resources-blog-headeing">
        //             <img src="images/icon/newspaper-icon.png" alt="" />
        //             <p>Press Releases</p>
        //           </div>
        //           <Link to="/resource/blogs" className="custome-btn" >
        //             <span className="txt">Explore All</span>
        //             <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow2} /></span>
        //           </Link>
        //         </div>
        //         <div className="resources-blog-bottom pt-30">
        //           <div className="row">
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg2} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg3} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg2} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>Ways to know if your supplier is disposing plastic properly!</p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //             <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
        //               <div className="custome-column-boxinner">
        //                 <div className="resources-blog-box">
        //                   <div className="custome-thumb">
        //                     <img src={BlogImg3} alt="" />
        //                   </div>
        //                   <div className="resources-blog-box-inner">
        //                     <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...
        //                     </p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        //   <section className="pt-80 pb-80 getInTouchSec" id="getInTouch" style={{background: `url(${TouchLogo}) no-repeat center center/cover`}}>
        //     <div className="container">
        //       <div className="getInTouchSecinner">
        //         <div className="mw-100 getInTouchArea">
        //           <div className="mb-25 text-center getInTouchHeaderArea">
        //             <h3 className="block-title white-txt-color fw-400 title">Not Able to Find What You<br className="d-block d-lg-none d-md-none d-sm-none" /> Were Looking For?</h3>
        //             <p className="white-txt-color mb-0">Reach out to us by filling the form below<br />so we can help you out! </p>
        //           </div>
        //           <div className="getInTouchFormArea">
        //             <form name="contactForm" method="post" id="contactForm">
        //               <div className="form-group">
        //                 <input type="text" name="full_name" className="form-control" placeholder="Name" required />
        //               </div>
        //               <div className="form-group">
        //                 <input type="text" name="company_name" className="form-control" placeholder="Company name" required />
        //               </div>
        //               <div className="form-group">
        //                 <input type="text" name="industry" className="form-control" placeholder="Industry" required />
        //               </div>
        //               <div className="form-group">
        //                 <input type="email" name="email" className="form-control" placeholder="Email" required />
        //               </div>
        //               <div className="form-group">
        //                 <div className="input-group">
        //                   <span className="input-group-text">
        //                     <select name="country_code" className="form-select" required>
        //                       <option>+91</option>
        //                       <option>+1</option>
        //                     </select>
        //                   </span>
        //                   <input type="number" name="phone_number" className="form-control" placeholder="Phone Number" required />
        //                 </div>
        //               </div>
        //               <div className="form-group">
        //                 <textarea name="notes" className="form-control" placeholder="Notes" required defaultValue={""} />
        //               </div>
        //               <div className="form-group">
        //                 <div className="form-check">
        //                   <input className="form-check-input" type="checkbox" id="check1" name="option1" defaultValue="something" required />
        //                   <label className="form-check-label">I agree to the Privacy Policy</label>
        //                 </div>
        //               </div>
        //               <div className="getInTouchFormBtnArea">
        //                 <button type="submit" name="submit" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
        //                   <span className="txt">Get Started</span>
        //                   <span className="icon">
        //                     <img className="img-fluid lazyload" src={RightArrow} alt="logo" />
        //                   </span>
        //                 </button>
        //               </div>
        //             </form>
        //             <div id="thankYouPopup" style={{display: 'none', fontSize: '13px', padding: '10px 0 0 0'}}>
        //               Thank you for your submission! Our team will get back to you.
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        //   <section className="pt-50 pb-60 homeSubscribeSec">
        //     <div className="container">
        //       <div className="homeSubscribeSecinner">
        //         <div className="text-center homeSubscribeContent">
        //           <div className="icon mb-25">
        //             <img className="img-fluid lazyloaded"  alt="logo" src={NewsLetter} />
        //           </div>
        //           <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news,
        //             insightful<br /> expert analysis,
        //             and practical tips—delivered straight to your inbox. </h4>
        //           <Link to="#" onClick={()=>setIsOpen(true)} className="custome-btn subscribe-btn">
        //             <span className="txt">Subscribe Now!</span>
        //             <span className="icon"><img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} /></span>
        //           </Link>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        // </main>

              <main>
                <section className="resoueces-sec resoueces-listing-banner-sec pt-40 pb-100">
                  <div className="container" style={{maxWidth:"95%"}}>
                    <div className="resources-inner">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="resources-left">
                            <h1 className="mav-20 fw-300 block-title">Resources</h1>
                            <p className="mb-25 text">Stay informed about what’s happening in the world of ESG through
                              our latest blogs, press releases, Client Success Stories, and eBooks
                            </p>
                            <div className="resources-input-sec ">
                              <div className="resources-input-box">
                                <input type="text" placeholder="Search Something" />
                                <button type="submit">
                                  <img src={SearchIcon} alt="" />
                                </button>
                              </div>
                              <a href="#" className="ml-10 sort">
                                <img src={SortIcon} alt="" />
                                Sort by
                              </a>
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
                            <img src="https://apexxcapital.co/images/resources/resource-img-two-2.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="resources-blog-sec resoueces-listing-sec pt-0 pb-30 " id="blogs">
                  <div className="container">
                    <div className="container-wrapper">
                      <div className="resources-blog-inner">
                        <div className="resources-blog-headeing">
                          <img src={BlogIcon} alt="" />
                          <p>Blogs</p>
                        </div>
                        {/*<a href="#" class="custome-btn" target="_blank">*/}
                        {/*<span class="txt">Explore All</span>*/}
                        {/*<span class="icon"><img class="img-fluid ls-is-cached lazyloaded"*/}
                        {/*   data-src="images/icon/right-arrow-2.svg" alt="logo"*/}
                        {/*   src="images/icon/right-arrow.svg"></span>*/}
                        {/*</a>*/}
                      </div>
                      {/*? /*				  
                                     * / ?*/}
                      <div className="resources-blog-bottom pt-30">
                        <div className="row rowBox">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/benefits-of-reshoring-production-to-eu">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-38-12 02:38:21-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Top 5 Benefits of Reshoring Your Production to the EU</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/how-to-choose-an-esg-reporting-framework">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://apexxcapital.co/images/how_to_choose_the_esg.jpeg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>How to Choose an ESG Reporting Framework: A Comprehensive Guide</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/the-business-case-for-accurate-esg-reporting">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-59-29 06:59:35-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Business Case for Accurate ESG Reporting</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/lksg-vs-csddd">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-57-19 12:57:29-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>LkSG vs EU CSDDD: What It Means For German Businesses</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/role-of-management-assistance-programs">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-45-16 02:45:43-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Role of Management Assistance Programs (MAPs) in Optimizing ESG Performance</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/der-unterschied-zwischen-csrd-und-esrs">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-23-10 04:23:33-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Der Unterschied zwischen CSRD und ESRS und wie VECTRA Ihnen helfen kann, die CSRD einzuhalten</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/difference-between-csrd-and-esrs">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-10-10 04:10:54-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Difference between CSRD vs. ESRS and How VECTRA Can Help You Comply with the CSRD</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/what-is-double-materiality">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-28-10 03:28:18-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>What is Double Materiality? Why is it Important?</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/impact-of-eu-eco-design-rules-on-indian-exporters">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-23-09 02:23:51-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>New EU Eco-Design Rules: A Bumpy Road Ahead for Indian Exporters</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/how-current-situation-analysis-can-help-achieve-esg-goals">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-35-05 02:35:32-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>How a Current Situation Analysis Can Revolutionize Your ESG Strategy</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/why-independent-quality-assurance-is-important">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-16-03 06:16:20-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/investor-expecatations-for-esg-in-mining">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-03-01 06:03:05-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Investor Expectations for ESG in the Mining Industry</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/eu-right-to-repair-regulation">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-42-18 10:42:21-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The EU’s Right to Repair Regulation: What It Means For Businesses</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/what-the-eu%27s-new-deforestation-law-means-for-india">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-56-17 10:56:46-RESOURCE-x}/image01.png" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>What the EU's New Deforestation Law Means for India</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/quality-assurance-improvement">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-55-10 03:55:15-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Continuous Improvement: The Future of Quality Assurance</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/esg-in-modern-business-management">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-43-04 03:43:55-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Role of ESG in Modern Business Management: Building a Sustainable Future</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/oecd-guidelines-for-responsible-business-practices">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-01-03 02:01:25-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>How the OECD Guidelines Shape Responsible Business Practices</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/why-stakeholder-management-important">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-13-03 06:13:05-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Why Stakeholder Engagement is Important for Business Success</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/faqs-about-eudr-answered">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-43-31 01:43:30-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Frequently Asked Questions about the EUDR - Answered</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/what-is-a-risk-management-system">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-24-31 01:24:52-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>What is a Risk Management System? And Why is it Important?</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/what-is-disc-assessment">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-57-27 02:57:38-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>DISC assessment: The key to outlining the best strategies for business success and growth</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/ethical-supply-chains-sourcing">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-17-20 05:17:59-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Transparency and Trust: Building Ethical Supply Chains Through Sourcing</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/what-is-materiality-assessment">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-34-09 01:34:55-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>What is a Materiality Assessment? And What it Means for You and Your Business</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/why-effective-communication-is-important-for-mining-companies">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-11-07 12:11:58-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Importance of Communicating ESG Efforts for Mining Companies</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/role-of-esg-in-mining">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-13-06 02:13:38-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Role of ESG Criteria in Shaping the Future of Mining Operations</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/embracing-diversity">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-54-02 02:54:16-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Embracing Diversity: Building a Stronger, More Dynamic Team</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/leadership-lessons-in-crisis">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-51-24 03:51:02-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Crisis Management - Navigating Choppy Waters: Leadership Lessons in Crisis</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/efficiency-vs-effectiveness">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-16-22 06:16:04-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Efficiency vs. Effectiveness: Balancing Priorities for Sustainable Cost Optimization </p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/supplier-relationship-management">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-03-17 02:03:19-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Supplier Relationship Management: Cultivating Partnerships for Long-term Success</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/vectra-international-at-global-sources-summit">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-29-05 07:29:10-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Join Patrick Neyts at Our Exclusive Workshop at Global Sources : April 2024 Global Sources Summit</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/5-strategies-for-risk-management">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-16-04 02:16:00-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>5 Proactive Strategies for Achieving Business Excellence Through Risk Management</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/risk-management-101">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-03-02 10:03:43-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Risk Management 101: How to Identify, Assess, and Mitigate Project Risks</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/vectra-at-global-sources-summit-2024">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-39-29 02:39:19-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Join Patrick Neyts at Our Exclusive Workshop at Global Sources : April 2024 Global Sources Summit</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/everything-you-need-to-know-about-supply-chain-due-diligence">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-56-26 01:56:22-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Everything You Need to Know About Supply Chain Due Diligence</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/understanding-the-risks">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-15-26 06:15:46-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Harnessing Change: VECTRA International's Guide to Climate-Proofing Your Business</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/leadership-in-esg-reporting">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-24-18 03:24:53-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Leading with Purpose: Transforming Compliance into Sustainable Leadership with ESG Reporting</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/5-proven-strategies-to-boost-your-business-performance-in-2024">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-35-18 06:35:25-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>5 Proven Strategies to Boost Your Business Performance in 2024</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/effective-grievance-handling">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-37-14 05:37:15-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Building Trust through Effective Grievance Handling: Best Practices</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/how-technology-fuels-sustainable-profits-in-mining">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-25-12 06:25:38-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>How Technology Fuels Sustainable Profits in the Mining Industry</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/addressing-sexual-harassment">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-22-11 02:22:42-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Enabling Positive Change: VECTRA International's Mission to Transform Businesses and Lives</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/demystifying-the-eu-deforestation-regulation">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-57-09 01:57:03-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Demystifying the EU Deforestation Regulation: Impact on Markets, Sustainability & ESG</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/sustainable-supply-chain">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-03-07 05:03:19-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Optimizing Resource Use :Rethinking Supply Chains for a Sustainable Future with VECTRA International</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/circular-economy-supply-chain-management">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-25-07 01:25:07-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Optimizing Resource Use: The Circular Economy's Impact on Supply Chains with VECTRA International</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/ethical-business">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-02-05 03:02:02-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Empowering Success: VECTRA International's Path to Ethical Business Excellence</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/5-strategies-for-efficient-quality-control-and-assessment">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-26-04 06:26:16-RESOURCE-x}/image01.png" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>5 Strategies for Efficient Quality Control & Assessment</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/optimizing-operations-for-sustainability-and-social-responsibility">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-21-04 06:21:24-RESOURCE-x}/image01.png" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Factory of the Future: Optimizing Operations for Sustainability and Social Responsibility</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/esg-news-round-up-february-2024">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-39-01 07:39:25-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>ESG News Round Up of February 2024</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/supply-chain-collaboration">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-49-26 08:49:05-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Supplier Collaboration: The Key to Elevating Supply Chain Performance</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/strategies-for-grievance-resolution">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-46-26 07:46:10-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Cultivating a Culture of Open Communication: Strategies for Grievance Resolution</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/elevating-supply-chain-performance">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-41-26 07:41:05-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Supplier Collaboration: The Key to Elevating Supply Chain Performance</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/esg-due-diligence">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-10-22 06:10:04-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Sustainable Success: Leveraging ESG Due Diligence for Responsible Business Practices</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/essential-pillars-of-ethical-supply-chains">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-59-16 11:59:48-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Transparency and Accountability: Essential Pillars of Ethical Supply Chains</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/embedding-esg-in-business-culture">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-44-13 06:44:07-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>          The Power of Purpose: How Embedding ESG in Your Culture Can Drive Transformation and Employee Engagement</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/respectful-workplace-environments">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-53-12 05:53:20-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Empowering Leadership: The Key to Fostering Respectful Workplace Environments</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/cost-effective-compliance-for-sustainable-success">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-42-06 01:42:49-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Navigating Regulatory Challenges for Sustainable Success: A Guide to Cost-effective Compliance</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/sustainable-business">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-37-01 09:37:56-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Unlocking Sustainable Business Excellence with VECTRA International</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/benefits-of-employee-capability-building">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-21-01 09:21:21-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Benefits of Employee Capability Building for Your Organization</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/6-tips-to-improve-cost-efficiancy-and-savings">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-02-01 07:02:07-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Improving Efficiency and Cost Savings: 6 Tips to Streamline Operations</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/supply-chain-dynamics">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-45-31 05:45:41-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Performance Perfection: Transforming Supply Chain Dynamics</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/canada-new-labor-in-supply-chain-law">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-22-31 10:22:44-RESOURCE-x}/image01.png" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Navigating Canada’s Newest Labor Compliance Laws</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/supply-chain-dynamics">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-35-31 09:35:17-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Unlocking Sustainable Business Excellence with VECTRA International</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/fueling-success-through-enhanced-performance">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-12-27 06:12:11-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Training Triumph: Fueling Success through Enhanced Performance</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/balancing-budgets-and-compliance">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-09-27 06:09:53-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Balancing Budgets and Compliance: Streamlining Costs for Performance</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/cost-effective-compliance-with-vectra-international">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-07-27 06:07:13-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Cracking the Code: Achieving High Performance through Cost-Effective Compliance with VECTRA International</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/canadas-newest-labor-compliance-laws">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-02-16 08:02:36-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Navigating Canada’s Newest Labor Compliance Laws</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/what-is-a-stakeholder-engagement-framework">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-40-04 02:40:18-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>What is a Stakeholder Engagement Framework? Why does your organization need one?</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/sustainability-in-supply-chains">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-12-01 06:12:42-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Sustainability in Supply Chains: Enabling Positive Impact</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/due-diligence-in-industrial-safety">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2023-37-28 08:37:53-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>The Importance of Due Diligence in Industrial Safety: A Comprehensive Guide</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/cost-management-services">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2023-14-27 10:14:01-RESOURCE-x}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Unlocking SME Potential: VECTRA's Cost Management Services</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="resources-blog-sec pt-50 pb-30 homeSubscribeSec d-none">
                  <div className="container">
                    <div className="container-wrapper">
                      <div className="resources-blog-inner">
                        <div className="resources-blog-headeing">
                          <img src="images/icon/book-icon.png" alt="" />
                          <p>Client Success Stories</p>
                        </div>
                        {/*<a href="#" class="custome-btn" target="_blank">*/}
                        {/*<span class="txt">Explore All</span>*/}
                        {/*<span class="icon"><img class="img-fluid ls-is-cached lazyloaded"*/}
                        {/*   data-src="images/icon/right-arrow-2.svg" alt="logo"*/}
                        {/*   src="images/icon/right-arrow.svg"></span>*/}
                        {/*</a>*/}
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
                {/*<section class="resources-blog-sec pt-30 pb-30">*/}
                {/*    <div class="container">*/}
                {/*        <div class="container-wrapper">*/}
                {/*            <div class="resources-blog-inner">*/}
                {/*                <div class="resources-blog-headeing">*/}
                {/*                    <img src="images/icon/open-book-icon.png" alt="">*/}
                {/*                    <p>eBooks</p>*/}
                {/*                </div>*/}
                {/*                <a href="#" class="custome-btn" target="_blank">*/}
                {/*                    <span class="txt">Explore All</span>*/}
                {/*                    <span class="icon"><img class="img-fluid ls-is-cached lazyloaded"*/}
                {/*                            data-src="images/icon/right-arrow-2.svg" alt="logo"*/}
                {/*                            src="images/icon/right-arrow.svg"></span>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div class="resources-blog-bottom pt-30">*/}
                {/*                <div class="row">*/}
                {/*                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">*/}
                {/*                        <div class="custome-column-boxinner">*/}
                {/*                            <div class="resources-blog-box">*/}
                {/*                                <div class="custome-thumb">*/}
                {/*                                    <img src="images/resources/resources-blog-img.png" alt="">*/}
                {/*                                </div>*/}
                {/*                                <div class="resources-blog-box-inner">*/}
                {/*                                    <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">*/}
                {/*                        <div class="custome-column-boxinner">*/}
                {/*                            <div class="resources-blog-box">*/}
                {/*                                <div class="custome-thumb">*/}
                {/*                                    <img src="images/resources/resources-blog-img2.png" alt="">*/}
                {/*                                </div>*/}
                {/*                                <div class="resources-blog-box-inner">*/}
                {/*                                    <p>Ways to know if your supplier is disposing plastic properly!</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">*/}
                {/*                        <div class="custome-column-boxinner">*/}
                {/*                            <div class="resources-blog-box">*/}
                {/*                                <div class="custome-thumb">*/}
                {/*                                    <img src="images/resources/resources-blog-img3.png" alt="">*/}
                {/*                                </div>*/}
                {/*                                <div class="resources-blog-box-inner">*/}
                {/*                                    <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">*/}
                {/*                        <div class="custome-column-boxinner">*/}
                {/*                            <div class="resources-blog-box">*/}
                {/*                                <div class="custome-thumb">*/}
                {/*                                    <img src="images/resources/resources-blog-img.png" alt="">*/}
                {/*                                </div>*/}
                {/*                                <div class="resources-blog-box-inner">*/}
                {/*                                    <p>Why Independent Quality Assurance is Essential for Accurate ESG Reports*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">*/}
                {/*                        <div class="custome-column-boxinner">*/}
                {/*                            <div class="resources-blog-box">*/}
                {/*                                <div class="custome-thumb">*/}
                {/*                                    <img src="images/resources/resources-blog-img2.png" alt="">*/}
                {/*                                </div>*/}
                {/*                                <div class="resources-blog-box-inner">*/}
                {/*                                    <p>Ways to know if your supplier is disposing plastic properly!</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div class="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">*/}
                {/*                        <div class="custome-column-boxinner">*/}
                {/*                            <div class="resources-blog-box">*/}
                {/*                                <div class="custome-thumb">*/}
                {/*                                    <img src="images/resources/resources-blog-img3.png" alt="">*/}
                {/*                                </div>*/}
                {/*                                <div class="resources-blog-box-inner">*/}
                {/*                                    <p>What the EU's New Deforestation Law Means for Indian Companies! Key f...*/}
                {/*                                    </p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="resources-blog-sec pt-30 pb-30 homeSubscribeSec" id="article">
                  <div className="container">
                    <div className="container-wrapper">
                      <div className="resources-blog-inner">
                        <div className="resources-blog-headeing">
                          <img src={OpenBook} alt="" />
                          <p>Articles</p>
                        </div>
                        {/*<a href="#" class="custome-btn" target="_blank">*/}
                        {/*<span class="txt">Explore All</span>*/}
                        {/*<span class="icon"><img class="img-fluid ls-is-cached lazyloaded"*/}
                        {/*   data-src="images/icon/right-arrow-2.svg" alt="logo"*/}
                        {/*   src="images/icon/right-arrow.svg"></span>*/}
                        {/*</a>*/}
                      </div>
                      <div className="resources-blog-bottom pt-30">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/esg-news-round-up-january-2024">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-27-31 10:27:13-RESOURCE-a}/image01.png" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>From Regulation to Innovation: ESG News Round Up of January 2024</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/esg-news-round-up">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-43-09 11:43:50-RESOURCE-a}/image01.png" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>Von der Regulierung zur Innovation: Zusammenfassung der ESG-Neuigkeiten</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="resources-blog-sec pt-50 pb-30 " id="press-releases">
                  <div className="container">
                    <div className="container-wrapper">
                      <div className="resources-blog-inner">
                        <div className="resources-blog-headeing">
                          <img src={NewsPaperIcon} alt="" />
                          <p>Press Releases</p>
                        </div>
                        {/*<a href="#" class="custome-btn" target="_blank">*/}
                        {/*<span class="txt">Explore All</span>*/}
                        {/*<span class="icon"><img class="img-fluid ls-is-cached lazyloaded"*/}
                        {/*   data-src="images/icon/right-arrow-2.svg" alt="logo"*/}
                        {/*   src="images/icon/right-arrow.svg"></span>*/}
                        {/*</a>*/}
                      </div>
                      <div className="resources-blog-bottom pt-30">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 columnBox custome-column-box mb-20">
                            <div className="custome-column-boxinner">
                              <a href="https://apexxcapital.co/resources/vectra-klappir-partnership">
                                <div className="resources-blog-box">
                                  <div className="custome-thumb">
                                    <img src="https://fffmestb.blob.core.windows.net/vectracs/resources/{post-2024-47-21 10:47:24-RESOURCE-p}/image01.jpg" alt="" />
                                  </div>
                                  {/*<div class="resources-blog-box-inner">*/}
                                  {/*   <p>VECTRA International and Klappir Forge Alliance to Assessment and Reporting of Sustainable Business Practices</p>*/}
                                  {/*</div>*/}
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="pt-80 pb-80 getInTouchSec"  id="getInTouch" style={{backgroundImage: 'url("https://apexxcapital.co/images/bg/getInTouch-bg.webp")'}}>
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
                                    <option value={+1}>+1 </option>
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
                                    <option value={+371}>+371</option>
                                    <option value={+353}>+353</option>
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
                                <label className="form-check-label">I agree to the <a href="https://apexxcapital.co/privacy-policy">Privacy Policy</a></label>
                              </div>
                            </div>
                            <div className="getInTouchFormBtnArea">
                              <button type="submit" name="submit" className="justify-content-center w-100 custome-btn getInTouchFormBtn">
                                <span className="txt">Get Started</span>
                                <span className="icon">
                                  <img className="img-fluid ls-is-cached lazyloaded"  alt="logo" src={RightArrow} />
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
                <section className="pt-50 pb-60 homeSubscribeSec d-none">
                  <div className="container">
                    <div className="homeSubscribeSecinner">
                      <div className="text-center homeSubscribeContent">
                        <div className="icon mb-25">
                          <img className="img-fluid lazyloaded" data-src="images/icon/newsletter-icon.svg" alt="logo" src="images/icon/newsletter-icon.svg" />
                        </div>
                        <h4 className="block-title fw-400 mb-30">Subscribe to our newsletter for the latest industry news,
                          insightful<br /> expert analysis,
                          and practical tips—delivered straight to your inbox. 
                        </h4>
                        <a href="#" className="custome-btn subscribe-btn">
                          <span className="txt">Subscribe Now!</span>
                          <span className="icon"><img className="img-fluid ls-is-cached lazyloaded" data-src="images/icon/right-arrow-2.svg" alt="logo" src="images/icon/right-arrow-2.svg" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            
      );
    };
export default Resources;    